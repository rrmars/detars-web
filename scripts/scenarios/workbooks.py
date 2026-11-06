#!/usr/bin/env python3
"""Deterministic, offline XLSX publication gate; Python standard library only."""
import argparse
import collections
import hashlib
import html
import io
import ipaddress
import json
import posixpath
import re
import sys
import urllib.parse
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path, PurePosixPath

POLICY = "scenarios-workbook-privacy-v1"

# Reviewed generator output inventory; changed/new artifacts fail closed pending review.
OWNERSHIP = {
    'bali-rent-sol/bali-comparison.xlsx': {'sourceSha256': 'c6291ceebe0daaae5e8c36074f7ddf01c21d706162a759231868bf941d679002', 'generatorRef': 'bali-rent-sol/build_comparison.py', 'generatorSha256': '800bf725af84dcbae9c14a14cf963a880e53cf74a3257bb2846aa2f169056a52', 'generationEvidence': [{'line': 21, 'code': "wb=xlsxwriter.Workbook(P/'bali-comparison.xlsx')"}]},
    'tokyo-rent-sol/tokyo-rent-comparison.xlsx': {'sourceSha256': 'acb8e84caf1bc396f7badae7a76e0dc7aa123cd33aa671d0204967c520c93649', 'generatorRef': 'tokyo-rent-sol/build.py', 'generatorSha256': '896e8efc35e038ae399b1e702b2dc43c8ba4d46bd3ac1efc24133c564281c0ab', 'generationEvidence': [{'line': 15, 'code': "wb=xlsxwriter.Workbook(str(P/'tokyo-rent-comparison.xlsx'))"}]},
    'tokyo-rent-terra/tokyo_rent_costs.xlsx': {'sourceSha256': '1062a0e80e930c152ee25b41cd2cc6d9363efa382e3c451ec7f6d37ad7cc1abb', 'generatorRef': 'tokyo-rent-terra/build.py', 'generatorSha256': '98643d7f783f15710ebd5712ecccbc5e28472dad41b94c30acfe8dffdfa6918e', 'generationEvidence': [{'line': 11, 'code': "book=xlsxwriter.Workbook(P+'/tokyo_rent_costs.xlsx')"}]},
    'w2-laptop-student/laptop-comparison.xlsx': {'sourceSha256': 'e84046220aa7224d291eb8685aad4c8dc57b12ea1edf09d3eadc87e37ec3ea9e', 'generatorRef': 'w2-laptop-student/build_comparison.py', 'generatorSha256': 'd651de94a55012a8ea7668c1d4c055c3f2369eb14b9e813565d62ffe04fa7d31', 'generationEvidence': [{'line': 83, 'code': "wb.save(P/'laptop-comparison.xlsx')"}]},
    'w2-tokyo-itinerary/Tokyo-5-days-plan-and-budget.xlsx': {'sourceSha256': 'ac0ca72fa1659d6da18053dc95f690c85b387b2322c50a91cb3b0dffdf7b4f70', 'generatorRef': 'w2-tokyo-itinerary/build_itinerary.py', 'generatorSha256': 'f07fde5e8ee9b7f1924628ba8d8fa3b5061db6535d2ba54beb1e06912c5d005c', 'generationEvidence': [{'line': 169, 'code': "wb=xlsxwriter.Workbook(ROOT/'Tokyo-5-days-plan-and-budget.xlsx')"}]},
    'w3-ai-research-tools/raw-results.xlsx': {'sourceSha256': '7ae75b198074924507681933c32151dc020d1fb5c52e444bfb9f0c89282ba320', 'generatorRef': 'w3-ai-research-tools/build_report.py', 'generatorSha256': '23a3e4fd3c8abcc19913bcefd9f78400ad58dc2e4c8db8b3fced01f9f95ea8bf', 'generationEvidence': [{'line': 76, 'code': "wb.save(ROOT/'raw-results.xlsx')"}]},
    'w3-bali-entry-au/bali-entry-checklist.xlsx': {'sourceSha256': 'dcbbbcdda5e6367cf5673f32cfba62e6f1805f32be7ec655c23e0b3dab261848', 'generatorRef': 'w3-bali-entry-au/build_checklist.py', 'generatorSha256': '101bdaea97eb2d327afca51b76f68ee0db0019694ded7e8b42fac11760cb8bf5', 'generationEvidence': [{'line': 62, 'code': "w=xlsxwriter.Workbook(P/'bali-entry-checklist.xlsx')"}]},
    'w3-cashflow-13week/coffee-shop-13-week.xlsx': {'sourceSha256': '5ee4fb0af1feeccf59e04d47a30eb51edbda68d086077b955abb2e1527cf1310', 'generatorRef': 'w3-cashflow-13week/build_forecast.py', 'generatorSha256': '563213305b314538138c7e1f97b704d3b184c0094508e733cf930c04199b87fb', 'generationEvidence': [{'line': 6, 'code': "w=xlsxwriter.Workbook(P/'coffee-shop-13-week.xlsx')"}]},
    'w3-danang-5days/Da-Nang-plan-and-budget.xlsx': {'sourceSha256': '582afc94f8a51fd88682b5493bbb77926d0fb1884e13dce29beaf30682846402', 'generatorRef': 'w3-danang-5days/build_plan.py', 'generatorSha256': '278d87e8a7f63d0837faa72f77272e35f1394dd68d4e4b063ae50ffeb5651ea7', 'generationEvidence': [{'line': 85, 'code': "w=xlsxwriter.Workbook(P/'Da-Nang-plan-and-budget.xlsx')"}]},
    'w3-dubai-budget/dubai-budget.xlsx': {'sourceSha256': '8b66faecacec3ceae82974df0836c54297b52ff3a890e7bd966f00369141d1ca', 'generatorRef': 'w3-dubai-budget/build_budget.py', 'generatorSha256': 'b705108698b57afd3628a6bcc6f7c0c15922151e640b97b1794303b0d8d6b465', 'generationEvidence': [{'line': 7, 'code': "out = ROOT/'dubai-budget.xlsx'"}]},
    'w3-household-budget/Household_Budget.xlsx': {'sourceSha256': '92c56f85b3da636f2d2055f397d08221939b88a12abe833bdb7c018da4603e7a', 'generatorRef': 'w3-household-budget/build_budget.py', 'generatorSha256': '8a3f719b3d34c5c0423525ca429a410b6b9b3bbea39544785d148dc5ee35d2d1', 'generationEvidence': [{'line': 244, 'code': "wb.save(ROOT/'Household_Budget.xlsx')"}]},
    'w3-japan-10days/japan-10-days.xlsx': {'sourceSha256': '63700104c3867bb84fd1a154d0aba616d9dfd3769dfd450bc454aec836196117', 'generatorRef': 'w3-japan-10days/build_pack.py', 'generatorSha256': 'ead3d161e834853224b038d4b36259ca8c1c342116e079ab398db7ea30730d1d', 'generationEvidence': [{'line': 53, 'code': "wb=xlsxwriter.Workbook(ROOT/'japan-10-days.xlsx')"}]},
    'w3-laptop-india/laptop-comparison.xlsx': {'sourceSha256': 'fa82838b3f8872771a131ce3f6e11599a0d299aef6d78e7b9eb998f0b6e74858', 'generatorRef': 'w3-laptop-india/build_deliverables.py', 'generatorSha256': '4713a042e8e679bafb398ecbdf77da2778d496218076826a9dea6b41a082895f', 'generationEvidence': [{'line': 89, 'code': "wb.save(ROOT/'laptop-comparison.xlsx')"}]},
    'w3-laptop-uk/laptop-comparison.xlsx': {'sourceSha256': 'd8dbcad5f372dd190c1727001a8d96c7b58959a8a651c9f09418d379a1787d1c', 'generatorRef': 'w3-laptop-uk/build.py', 'generatorSha256': 'ec85be06518c92ab62f046cf8a7bb41f432d72b8edf3fac5c7f498751d56d2b3', 'generationEvidence': [{'line': 25, 'code': "w=xlsxwriter.Workbook(str(P/'laptop-comparison.xlsx'))"}]},
    'w3-manali-itinerary/manali-plan-budget.xlsx': {'sourceSha256': 'e0d47f89e9830026cf8ef22fdafd6af82e4b250ffc0a82d79fb4f9e048aa6db7', 'generatorRef': 'w3-manali-itinerary/build_itinerary.py', 'generatorSha256': 'a9186cc9e317ac8471e3b01fab280e0b1d6d768df05f7faeea437d65e339555e', 'generationEvidence': [{'line': 156, 'code': "wb=xlsxwriter.Workbook(ROOT/'manali-plan-budget.xlsx')"}]},
    'w3-meal-plan/Chicago_7_day_meal_plan.xlsx': {'sourceSha256': '70709ba0076f6c8ec883094fe4476d2b9fa959d884bee924cd2dfef11e7f620e', 'generatorRef': 'w3-meal-plan/build_deliverables.py', 'generatorSha256': 'facb63f9f8111c04b7acbc3b711bf6b124066626877da034fa757d71cd169579', 'generationEvidence': [{'line': 24, 'code': "w=xlsxwriter.Workbook(str(P/'Chicago_7_day_meal_plan.xlsx'))"}]},
    'w3-melbourne-living/Melbourne-budget-March-2027.xlsx': {'sourceSha256': '0a318818fcb648bbda4331319354927a67d2a5ae7b19635ca33b4e4eb611f2ae', 'generatorRef': 'w3-melbourne-living/build_budget.py', 'generatorSha256': '3bce9b28979c004f5208be3d816af98e2320c0d902201771b298d3fde6bc0bc7', 'generationEvidence': [{'line': 23, 'code': "OUT=ROOT/'Melbourne-budget-March-2027.xlsx'"}]},
    'w3-miami-3days/miami-plan-budget.xlsx': {'sourceSha256': '0313c1fb654d1f2c65e6ab479fee89d5daecd3fb3ff34df3b2f3999de9bbde16', 'generatorRef': 'w3-miami-3days/build_guide.py', 'generatorSha256': '03f12e0ad8e196d183a93668d9413b9073fdcf9ca06e9ec426d9f7d26bac0a20', 'generationEvidence': [{'line': 161, 'code': "wb=xlsxwriter.Workbook(ROOT/'miami-plan-budget.xlsx')"}]},
    'w3-nyc-rent/nyc-rental-costs.xlsx': {'sourceSha256': '2ff804bfdda61f37503bb007400335e2d3e6eefd7b1cedfb186853cd428aba52', 'generatorRef': 'w3-nyc-rent/build_deliverables.py', 'generatorSha256': '87d9af6266bdfef1e404056e537b91e47d4647be4880a1bb70cd02cafa240758', 'generationEvidence': [{'line': 18, 'code': "wb=xlsxwriter.Workbook(ROOT/'nyc-rental-costs.xlsx')"}]},
    'w3-singapore-3days/singapore-family-plan-budget.xlsx': {'sourceSha256': 'e837ca9a0d02d1beb7967674743a3ac6b86b8ac25cde816329c607165a3016b1', 'generatorRef': 'w3-singapore-3days/build_deliverables.py', 'generatorSha256': 'fff47f2b5da9cd16235bdbc33a54b5fa164b04cae067c85c275e0943e2777d89', 'generationEvidence': [{'line': 166, 'code': "w=xlsxwriter.Workbook(P/'singapore-family-plan-budget.xlsx')"}]},
    'w3-uk-offer/UK_offer_comparison.xlsx': {'sourceSha256': '0d2a163ecba3e44bd2e8dccb97f159f0ea1c98e4c656a31308bafaed54ca865f', 'generatorRef': 'w3-uk-offer/build_workbook.py', 'generatorSha256': '58b69c33508fc80d80833d973586d242997e3b6d1e626b3f1844923d27aecb5a', 'generationEvidence': [{'line': 8, 'code': "wb=xlsxwriter.Workbook(ROOT/'UK_offer_comparison.xlsx')"}]},
    'w4-ai-slide-tools/raw-results.xlsx': {'sourceSha256': '90eb14ac4fcd618f46eb4f49a2470b811976f80fbbe82bc734570b32acf950e5', 'generatorRef': 'w4-ai-slide-tools/build-comparison.py', 'generatorSha256': 'ae44fa0a742a6d1ccfea976eccc5cb4703f028c3c6264e3f26f5e92d2464839d', 'generationEvidence': [{'line': 84, 'code': "wb.save(D/'raw-results.xlsx')"}]},
    'w4-anc-headphones/anc-comparison.xlsx': {'sourceSha256': '62c0dbb621d08e7ef8a68d2340248e7e645c9f8328361916e7dd78f7e20c82c3', 'generatorRef': 'w4-anc-headphones/build_comparison.py', 'generatorSha256': 'bbb51a3fc22e58b22aae5ede454a4cc2b5f54ed824fde714c8f2b021a32c306b', 'generationEvidence': [{'line': 54, 'code': "wb=xlsxwriter.Workbook(ROOT/'anc-comparison.xlsx')"}]},
    'w4-bali-buy/bali_buy_2027.xlsx': {'sourceSha256': '0c0c362abe77c867f2d037ca9f928a0d56857b0da56af1cb00de364613d82b45', 'generatorRef': 'w4-bali-buy/build_pack.py', 'generatorSha256': '747604639a2b87108e23fae139f00aeef6cc1e7f4ca13190d0ee33c2a65ef34a', 'generationEvidence': [{'line': 7, 'code': "wb=xlsxwriter.Workbook(P/'bali_buy_2027.xlsx')"}]},
    'w4-dubai-buy/Dubai-investment-model.xlsx': {'sourceSha256': '21f5f2d48579398b1742d8dba3ee48eba5981f0f1e85ce964a1c2e622ce55512', 'generatorRef': 'w4-dubai-buy/build_deliverables.py', 'generatorSha256': '865661d24fc1dad27169014393fc3c01f110ea65e83971acbdcc343665907d53', 'generationEvidence': [{'line': 8, 'code': "W=xlsxwriter.Workbook(str(R/'Dubai-investment-model.xlsx'))"}]},
    'w4-lisbon-living/Lisbon-budget-Apr2027.xlsx': {'sourceSha256': 'c760d5867b9200da1940836e7b597179839d73dd3800ba1afd40a78ee637348b', 'generatorRef': 'w4-lisbon-living/build_deliverables.py', 'generatorSha256': '220ae4537c93d849bad474a51c8fd8e76a4d044eb87824e7ecaa0542ed8259e1', 'generationEvidence': [{'line': 7, 'code': "wb=xlsxwriter.Workbook(ROOT/'Lisbon-budget-Apr2027.xlsx')"}]},
    'w4-london-living/London-graduate-budget.xlsx': {'sourceSha256': '104c6394b881c347bfd2f1fd033504fbc6ff3916ea3c5a8a0fa88ee4b4441caa', 'generatorRef': 'w4-london-living/build_budget.py', 'generatorSha256': '4313305684b354a4b4f17ecbb6ec315a69fbe5ab5f6199118ab35cf937394fd5', 'generationEvidence': [{'line': 234, 'code': "wb.save(ROOT/'London-graduate-budget.xlsx')"}]},
    'w4-nomad-visas/digital-nomad-visas-2027.xlsx': {'sourceSha256': '8f6dd42f1d1bd74915a9c74a057d50bde3364dd5704275eb696fe3ab785a53b4', 'generatorRef': 'w4-nomad-visas/build_deliverables.py', 'generatorSha256': 'abc3179d374504c0b5e1cdbb471c46c116b169b0bc226d5ddba93d8fda37803b', 'generationEvidence': [{'line': 6, 'code': "wb=xlsxwriter.Workbook(ROOT/'digital-nomad-visas-2027.xlsx')"}]},
    'w4-phone-under-500/phone-comparison.xlsx': {'sourceSha256': '9a53ea539a48fe0167fb44294ed0b64288a5e714d98562ab75b952eddaa8b982', 'generatorRef': 'w4-phone-under-500/build_comparison.py', 'generatorSha256': 'c63e8ddb5c03c80adc08b4d13abd0900488aabbf64b1a9d44276898a617e0947', 'generationEvidence': [{'line': 86, 'code': "wb.save(ROOT/'phone-comparison.xlsx')"}]},
    'w4-robot-vacuum/robot-vacuum-comparison.xlsx': {'sourceSha256': 'ffb4bdf08d8ce4d90336e8085a6bdabe5847c53bffa754bb10b0373e9b0f8948', 'generatorRef': 'w4-robot-vacuum/build_report.py', 'generatorSha256': '4181a8c4b7e1d686e5768ae19714bba793ea026fdfd7acd9b4c251df213c2b0a', 'generationEvidence': [{'line': 53, 'code': "W=xlsxwriter.Workbook(ROOT/'robot-vacuum-comparison.xlsx')"}]},
    'w4-study-abroad-india/Study_abroad_2027_costs_and_plan.xlsx': {'sourceSha256': '6dc2bb4b0e97ab09034fe2724d2db70e6e9ec96d1f771643cfb254b22613026b', 'generatorRef': 'w4-study-abroad-india/build_workbook.py', 'generatorSha256': 'dfacc24a96cc4b8117545c970660622b4f0f860d21914d2f16271962a8eee23e', 'generationEvidence': [{'line': 8, 'code': "OUT=ROOT/'Study_abroad_2027_costs_and_plan.xlsx'"}]},
    'w4-toronto-living/Toronto_couple_budget.xlsx': {'sourceSha256': '1f1059f72353564ca077bcc82c777ff6fd7b61dc42cd667b758eaa00ad86bfbf', 'generatorRef': 'w4-toronto-living/build_budget.py', 'generatorSha256': '13ec69ee6f9a3d51ab67195447375523d4c8af3b0a605ef13e37790be6e36433', 'generationEvidence': [{'line': 9, 'code': "wb=xlsxwriter.Workbook(ROOT/'Toronto_couple_budget.xlsx')"}]},
    'w4-wedding-budget/wedding-budget.xlsx': {'sourceSha256': 'fe41e319060923a1e8b814f222a7f979b4a0f995a34b5ee72d26a4b0010930f9', 'generatorRef': 'w4-wedding-budget/build_budget.py', 'generatorSha256': 'ed664ca5c00ef506df56b5da5c62e84361c3e6225158067c9ec7681df8deaf69', 'generationEvidence': [{'line': 7, 'code': "wb=xlsxwriter.Workbook(ROOT/'wedding-budget.xlsx')"}]},
    'w5-baby-budget/baby-budget.xlsx': {'sourceSha256': '623d6d88564b020c6f2c6a5249787511bf99276e72925d6f0ea3a337e6f9d66f', 'generatorRef': 'original-task/w5 · first-year baby budget (US)/build_budget.py', 'generatorSha256': 'f46f38251ec390369c69947ab21cac98c83c4093aede697bff1977c79892d103', 'generationEvidence': [{'line': 239, 'code': "path=OUT/'baby-budget.xlsx';wb.save(path)"}]},
    'w5-etsy-pricing/pricing.xlsx': {'sourceSha256': '3e7f440bff38b275d9f14a1e07345c48b8a2f57dfabee4b24523c7fc4ef3e4a6', 'generatorRef': 'original-task/w5 · Etsy handmade shop pricing and fee calculator (US)/build.py', 'generatorSha256': '21848f103ba9c8632c3311bc4912a094f36581490d13fb7bac233f918919d532', 'generationEvidence': [{'line': 167, 'code': "wb.save(OUT/'pricing.xlsx')"}]},
    'w5-freelancer-tax/freelancer-tracker.xlsx': {'sourceSha256': '98f9e5f6fdae2bef9c3c77478a272e3f83a4d762faae36050edfb84a3d62e73c', 'generatorRef': 'original-task/w5 · freelancer income and quarterly tax set-aside tracker (US)/build_tracker.py', 'generatorSha256': '850698e578c835d0e25aee6f787a602f0c844a3c113f9547ae34c0930739faf7', 'generationEvidence': [{'line': 301, 'code': "path=OUT/'freelancer-tracker.xlsx'; w.save(path)"}]},
    'w5-kiosk-budget/kiosk-budget.xlsx': {'sourceSha256': 'e0205223e672ef9796c444d4585c464982501855758754450eda5fe5d92046f0', 'generatorRef': 'original-task/w5 · small coffee kiosk 12-month budget (xlsx)/build_budget.py', 'generatorSha256': '96695506221436cadf183d0d0e847fa9944df097d890e7ed994ed2e849b3e893', 'generationEvidence': [{'line': 239, 'code': "wb.save(OUT/'kiosk-budget.xlsx')"}]},
    'w5-manchester-buy/buy-plan.xlsx': {'sourceSha256': '5ea1cf6f4a6dff7558b65eb43f8defdbaa0302b21438f322350ec78ba6191a5d', 'generatorRef': 'original-task/w5 · first-time buyer in Manchester- deposit, costs and timeline/build_plan.py', 'generatorSha256': 'fdd904ba493bfd1ee7496f38ffc599864e893a238c64ac6eea7f09e31b3eacec', 'generationEvidence': [{'line': 119, 'code': "w.save(P/'buy-plan.xlsx')"}]},
    'w5-offer-austin-sf/offer-compare.xlsx': {'sourceSha256': '88988a914114e8ae3b4317e15515c3dc4c5d52a5e17820ccc2bed008b62606eb', 'generatorRef': 'original-task/w5 · job offer comparison Austin vs San Francisco/build_compare.py', 'generatorSha256': '0c2694214f62ab9411221babc4822b14896d7f8b87d7858fc35f5fe05bb4a718', 'generationEvidence': [{'line': 137, 'code': "w.save(OUT/'offer-compare.xlsx')"}]},
    'w5-sg-sydney-move/move-plan.xlsx': {'sourceSha256': '8d8e712496825d3b9cd7a3e847e88b284d67dcb1dc778b1caefdf3041ab26749', 'generatorRef': 'original-task/w5 · relocating a family of three from Singapore to Sydney- cost/build_move.py', 'generatorSha256': 'fbc7ce386e7fbacfcf47cd278abbb2a9f28efe5fcce87ce387a6e90cb3ee1f8e', 'generationEvidence': [{'line': 52, 'code': "wb=xlsxwriter.Workbook(str(OUT/'move-plan.xlsx'))"}]},
    'w6-uk-jewellery-selling/compare.xlsx': {'sourceSha256': 'e3ae3137b1517c1f8398cd9834ee2b9b88569661b6fb593af4e1beb57fecbf2a', 'generatorRef': 'original-task/w6 · where to sell handmade jewellery online in the UK- Etsy vs/build_deliverables.py', 'generatorSha256': '1577cc53fe3c95619afe73bfe89c16a5420ec05ad93d369771ced5515186917d', 'generationEvidence': [{'line': 245, 'code': "wb.save(OUT/'compare.xlsx')"}]},
}
XML_SUFFIXES = (".xml", ".rels", ".vml")
EXCLUDED_DIRS = re.compile(r"(?i)^(?:evidence.*|verification.*|checks?|tests?|sources?|research|screenshots?|\.\w+)$")
LOCAL_PATH = re.compile(r"(?i)(?:file:(?://)?|(?<![\w/])/(?:Users|Volumes|home|mnt|private|tmp|data|workspace|root|var/folders)/|[a-z]:[\\/]|\\\\[\w.-]+\\|(?<!\w)~[/\\])")
EMAIL = re.compile(r"(?i)(?<![\w.+-])[\w.+-]+@[\w.-]+\.[a-z]{2,}(?!\w)")
CREDENTIAL = re.compile(r"(?i)(?:\b(?:sk-(?:proj-)?[a-z0-9_-]{16,}|AKIA[A-Z0-9]{16}|gh[pousr]_[a-z0-9]{20,}|eyJ[a-z0-9_-]{15,}\.[a-z0-9_-]{10,}\.[a-z0-9_-]{10,})\b|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY|\bBearer\s+[a-z0-9._~-]{12,}|\b(?:api[_ -]?key|access[_ -]?token|password|client[_ -]?secret|secret[_ -]?key)\s*[=:]\s*[\"']?[a-z0-9_+/=-]{8,})")
PHONE = re.compile(r"(?<![\w.])(?:\+\d[\d ()-]{8,}\d|\(?\d{3}\)?[-. ]\d{3}[-. ]\d{4})(?![\w.])|(?i:(?:phone|mobile|tel|电话|手机)\s*[:：=]\s*\d{7,15})")
IDENTITY = re.compile(r"(?i)\b(?:\d{3}-\d{2}-\d{4}|(?:SSN|passport\s+(?:no\.?|number)|account\s*(?:no\.?|number))\s*[:=]\s*(?=[a-z0-9-]*\d)[a-z0-9-]{4,}|date of birth\s*[:=]\s*\d[^\s,;]{4,}|full name\s*[:=]\s*[a-z][a-z .'-]{3,})|(?:身份证|证件号|姓名|出生日期)\s*[:：]\s*[^\s，；]{2,}")
PERSON_HEADER = re.compile(r"(?i)^(?:full name|first name|last name|client name|employee name|patient name|date of birth|dob|ssn|passport number|account number|姓名|身份证号|出生日期)$")
CONTACT_HEADER = re.compile(r"(?i)^(?:phone|mobile|telephone|email|e-mail|phone number|mobile number|email address|电话|手机|手机号|邮箱)$")
URL = re.compile(r"https?://[^\s<>\"'`]+", re.I)
ILLUSTRATIVE = re.compile(r"(?i)\b(?:fictional|invented|illustrative|example household|fictional demo)\b|虚构|示例")
ATTR = re.compile(rb"([\w:.-]+)\s*=\s*([\"'])(.*?)\2", re.S)


def digest(data):
    return hashlib.sha256(data).hexdigest()


def local(tag):
    return tag.rsplit("}", 1)[-1] if isinstance(tag, str) else "xmlCommentOrPI"


def within(path, root):
    return path == root or root in path.parents


def flag(code, part, location="", value="", blocking=True):
    result = {"code": code, "part": part, "location": location, "blocking": blocking}
    if value:
        result["valueSha256"] = digest(value.encode())
    return result


def attrs(raw):
    return {k.decode(): html.unescape(v.decode()) for k, _, v in ATTR.findall(raw)}


def scan_value(value, part, location):
    """Do not confuse public URL /home paths, dates or numeric caches with PII."""
    found = []
    decoded = urllib.parse.unquote(html.unescape(value))
    for match in URL.finditer(decoded):
        try:
            url = urllib.parse.urlsplit(match.group())
            if url.username or url.password:
                found.append(flag("url_credentials", part, location, match.group()))
            if any(re.fullmatch(r"(?i)(?:api[_-]?key|access[_-]?token|token|secret|password|signature|credential|session(?:id)?|auth(?:orization)?|x-amz-signature)", k)
                   and v for k, v in urllib.parse.parse_qsl(url.query)):
                found.append(flag("sensitive_url_parameter", part, location, match.group()))
            components = [v for _, v in urllib.parse.parse_qsl(url.query)] + [url.fragment]
            if not url.path.lower().startswith("/home/"):
                components.append(url.path)
            for component in components:
                for code, pattern in (("private_path", LOCAL_PATH), ("person_identifier", IDENTITY)):
                    if pattern.search(component):
                        found.append(flag(code, part, location + ":urlComponent", component))
            host = url.hostname or ""
            try:
                private = not ipaddress.ip_address(host).is_global
            except ValueError:
                private = host.lower() in {"localhost", "localhost.localdomain"} or host.endswith((".local", ".internal"))
            if private:
                found.append(flag("private_network_url", part, location, match.group()))
        except ValueError:
            found.append(flag("invalid_url", part, location, match.group()))
    text = URL.sub("", decoded)
    for code, pattern in (("credential", CREDENTIAL), ("email", EMAIL),
                          ("phone", PHONE), ("private_path", LOCAL_PATH),
                          ("person_identifier", IDENTITY)):
        haystack = text if code in {"private_path", "person_identifier"} else decoded
        for match in pattern.finditer(haystack):
            found.append(flag(code, part, location, match.group()))
    return found


def kind(name):
    lower = name.lower()
    if name.startswith("docProps/"):
        return "metadata"
    if lower.endswith(".rels"):
        return "relationships"
    if "comment" in lower or "person" in lower:
        return "comments"
    if name.startswith("xl/worksheets/") and name.endswith(".xml"):
        return "worksheets"
    if name == "xl/sharedStrings.xml":
        return "sharedStrings"
    return "otherXml"


def formula_cache_signature(parts):
    """Exact formula/value payloads, including attributes and cached results."""
    h = hashlib.sha256()
    count = 0
    for name, data in sorted(parts.items()):
        if name.startswith("xl/worksheets/") and name.endswith(".xml"):
            for match in re.finditer(rb"<(?:\w+:)?(?:f|v)\b[^>]*(?:/>|>.*?</(?:\w+:)?(?:f|v)\s*>)", data, re.S):
                h.update(name.encode() + b"\0" + match.group() + b"\0")
                count += 1
    return {"sha256": h.hexdigest(), "formulaAndValueElements": count}


def load_parts(data):
    with zipfile.ZipFile(io.BytesIO(data)) as archive:
        infos = archive.infolist()
        if len(infos) > 5000 or sum(x.file_size for x in infos) > 100_000_000:
            raise ValueError("package_size_limit")
        names = [i.filename for i in infos]
        if len(names) != len(set(names)):
            raise ValueError("duplicate_package_part")
        if any(n.startswith("/") or ".." in PurePosixPath(n).parts or "\\" in n for n in names):
            raise ValueError("unsafe_package_part")
        if archive.comment or any(i.comment for i in infos):
            raise ValueError("uninspected_zip_comment")
        return {i.filename: archive.read(i) for i in infos if not i.is_dir()}


def inspect(parts):
    evidence = {"parts": [], "counts": dict.fromkeys(
        ["packageParts", "xmlParts", "metadata", "relationships", "comments", "worksheets",
         "sharedStrings", "otherXml", "textNodes", "attributes", "formulas", "cachedFormulaValues"], 0),
        "metadata": [], "relationships": [], "comments": [], "illustrativeEvidence": []}
    counts = evidence["counts"]
    counts["packageParts"] = len(parts)
    found = []
    shared = []
    if "xl/sharedStrings.xml" in parts:
        tree = ET.fromstring(parts["xl/sharedStrings.xml"])
        shared = ["".join(el.itertext()) for el in tree if local(el.tag) == "si"]
    for name, data in sorted(parts.items()):
        low = name.lower()
        if any(x in low for x in ("vbaproject", "macrosheet", "externallink", "connections", "querytable", "embedding", "activex", "customxml", "_xmlsignatures")):
            found.append(flag("active_or_embedded_content", name))
        if not low.endswith(XML_SUFFIXES):
            # No opaque binary attachments, including pictures: cannot privacy-audit pixels here.
            found.append(flag("opaque_package_part", name))
            continue
        if b"<!DOCTYPE" in data.upper() or b"<!ENTITY" in data.upper():
            raise ValueError("xml_entities_forbidden")
        # ElementTree omits prolog/epilog comments/PIs and namespace declarations.
        for match in re.finditer(rb"<!--.*?-->|<\?.*?\?>|\bxmlns(?::[\w.-]+)?\s*=\s*([\"']).*?\1", data, re.S):
            found.extend(scan_value(match.group().decode("utf-8"), name, "xmlLexical"))
        tree = ET.fromstring(data, parser=ET.XMLParser(target=ET.TreeBuilder(insert_comments=True, insert_pis=True)))
        category = kind(name)
        counts["xmlParts"] += 1
        counts[category] += 1
        item = {"part": name, "sha256": digest(data), "bytes": len(data), "kind": category,
                "textNodes": 0, "attributes": 0}
        metadata_fields = []
        rel_types = collections.Counter()
        rel_modes = collections.Counter()
        comment_authors = []
        for index, el in enumerate(tree.iter()):
            tag = local(el.tag)
            location = f"{tag}[{index}]"
            if el.tail and el.tail.strip():
                found.extend(scan_value(el.tail, name, location + ":tail"))
            if el.text and el.text.strip():
                counts["textNodes"] += 1
                item["textNodes"] += 1
                # Numeric values are still scanned for identifiers/credentials, but not phones.
                hits = scan_value(el.text, name, location)
                if tag == "v" and re.fullmatch(r"[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?", el.text):
                    hits = [x for x in hits if x["code"] != "phone"]
                found.extend(hits)
                if category in {"worksheets", "sharedStrings"} and ILLUSTRATIVE.search(el.text):
                    evidence["illustrativeEvidence"].append({"part": name, "location": location,
                                                             "textSha256": digest(el.text.encode())})
                if tag == "author":
                    comment_authors.append({"valueSha256": digest(el.text.encode()), "characters": len(el.text)})
                    if el.text not in {"", "Research", "Budget guide", "Unknown Author", "Source",
                                       "Source / assumption", "Travel assumption", "Source / model note", "Source note", "DeTars"}:
                        found.append(flag("unrecognized_comment_author", name, location, el.text))
            if category == "metadata" and (el.text or "").strip():
                metadata_fields.append({"field": tag, "characters": len(el.text), "valueSha256": digest(el.text.encode())})
            counts["attributes"] += len(el.attrib)
            item["attributes"] += len(el.attrib)
            for key, value in sorted(el.attrib.items()):
                # Package relationships are NOT filesystem paths (e.g. ../comments1.xml).
                if tag == "Relationship" and key == "Target" and el.get("TargetMode") != "External":
                    continue
                found.extend(scan_value(value, name, location + "@" + local(key)))
                if key in {"ContentType", "Type"} and re.search(r"(?i)(?:macroenabled|vbaproject|oleobject|activex|externalLink|attachedTemplate|connections|queryTable)", value):
                    found.append(flag("active_content_declaration", name, location, value))
            if tag == "Relationship":
                target = el.get("Target", "")
                typ = el.get("Type", "").rsplit("/", 1)[-1]
                mode = el.get("TargetMode", "Internal")
                rel_types[typ] += 1
                rel_modes[mode] += 1
                if mode == "External":
                    scheme = urllib.parse.urlsplit(target).scheme.lower()
                    if typ != "hyperlink" or scheme not in {"http", "https"}:
                        found.append(flag("nonpublic_external_relationship", name, el.get("Id", ""), target))
                else:
                    owner = name.replace("/_rels/", "/")[:-5] if name != "_rels/.rels" else ""
                    resolved = posixpath.normpath(posixpath.join(posixpath.dirname(owner), target)).lstrip("/")
                    if resolved not in parts:
                        found.append(flag("missing_internal_relationship_target", name, el.get("Id", ""), target))
            if tag in {"f", "definedName"} and el.text:
                formula = re.sub(r'"(?:[^"\n]|"")*"', '""', el.text)
                if re.search(r"(?i)(?:\[\d+\]|\[[^\]]+\.xlsx?\]|\b(?:WEBSERVICE|RTD|DDE|CALL|REGISTER\.ID)\s*\(|\|[^!]*!)", formula):
                    found.append(flag("external_or_active_formula", name, location, el.text))
                if re.search(r"(?i)\bHYPERLINK\s*\(", formula):
                    found.append(flag("formula_hyperlink_requires_review", name, location, el.text))
            if tag == "f":
                counts["formulas"] += 1
            if tag == "c" and any(local(ch.tag) == "f" for ch in el):
                counts["cachedFormulaValues"] += sum(local(ch.tag) == "v" and ch.text is not None for ch in el)
        # Rich text can split sensitive tokens across runs. Scan concatenated strings too.
        for el in tree.iter():
            if local(el.tag) in {"si", "is", "comment"}:
                text = "".join(x.text or "" for x in el.iter() if local(x.tag) == "t")
                found.extend(scan_value(text, name, local(el.tag) + ":joinedText"))
        if category == "worksheets":
            cells = {}
            for cell in tree.iter():
                if local(cell.tag) != "c":
                    continue
                text = "".join(x.text or "" for x in cell.iter() if local(x.tag) in {"t", "v"})
                if cell.get("t") == "s":
                    text = shared[int(text)] if text.isdigit() and int(text) < len(shared) else ""
                cells[cell.get("r", "")] = text
            for ref, text in cells.items():
                if CONTACT_HEADER.fullmatch(text.strip()):
                    column = re.sub(r"\d", "", ref)
                    for target, value in cells.items():
                        if re.sub(r"\d", "", target) == column and target != ref and (re.fullmatch(r"\+?\d{7,15}", value) or PHONE.search(value) or EMAIL.search(value)):
                            found.append(flag("populated_contact_field", name, target, value))
                if PERSON_HEADER.fullmatch(text.strip()):
                    column = re.sub(r"\d", "", ref)
                    populated = sum(bool(v.strip()) for r, v in cells.items()
                                    if re.sub(r"\d", "", r) == column and r != ref)
                    if populated:
                        found.append(flag("populated_person_field", name, ref, text))
        if category == "metadata":
            evidence["metadata"].append({"part": name, "fields": metadata_fields})
        if category == "relationships":
            evidence["relationships"].append({"part": name, "types": dict(sorted(rel_types.items())), "modes": dict(sorted(rel_modes.items()))})
        if category == "comments":
            evidence["comments"].append({"part": name, "authors": comment_authors,
                "commentCount": sum(local(el.tag) in {"comment", "threadedComment"} for el in tree.iter())})
        evidence["parts"].append(item)
    evidence["formulaCacheSignature"] = formula_cache_signature(parts)
    unique = {json.dumps(f, sort_keys=True): f for f in found}
    return evidence, [unique[k] for k in sorted(unique)]


def sanitize(parts, workbook, run_root):
    """Bounded patches only: creators, local-path metadata, draft hyperlink edges."""
    result = dict(parts)
    changes = []
    for name, data in sorted(parts.items()):
        if kind(name) == "metadata":
            # Patch leaf text only, retaining declarations, namespaces and all other bytes.
            pattern = rb"<([\w.-]+:)?(creator|lastModifiedBy)\b([^>]*)>([^<]*)</(?:[\w.-]+:)?\2\s*>"
            def creator(match):
                if not match[4] or html.unescape(match[4].decode()) == "DeTars":
                    return match.group()
                changes.append({"part": name, "action": "normalize_creator", "field": match[2].decode(), "beforeSha256": digest(match[4])})
                start, end = match.start(4) - match.start(), match.end(4) - match.start()
                return match.group()[:start] + b"DeTars" + match.group()[end:]
            updated = re.sub(pattern, creator, data)
            leaf = rb"(<[\w:.-]+\b[^>]*>)([^<>]+)(</[\w:.-]+\s*>)"
            def metadata_path(match):
                text = html.unescape(match[2].decode())
                if LOCAL_PATH.search(URL.sub("", urllib.parse.unquote(text))):
                    changes.append({"part": name, "action": "remove_local_path_metadata", "beforeSha256": digest(match[2])})
                    return match[1] + match[3]
                return match.group()
            updated = re.sub(leaf, metadata_path, updated)
            result[name] = updated
        if not name.endswith(".rels"):
            continue
        owner = name.replace("/_rels/", "/")[:-5] if name != "_rels/.rels" else ""
        if not owner.startswith("xl/worksheets/") or owner not in parts:
            continue
        removals = set()
        pattern = rb"<(?:\w+:)?Relationship\b[^>]*(?:/>|>.*?</(?:\w+:)?Relationship\s*>)"
        def relationship(match):
            a = attrs(match.group())
            target = urllib.parse.unquote(a.get("Target", ""))
            parsed = urllib.parse.urlsplit(target)
            if a.get("TargetMode") != "External" or not a.get("Type", "").endswith("/hyperlink"):
                return match.group()
            if parsed.scheme or parsed.netloc or target.startswith(("/", "\\")):
                return match.group()
            destination = (workbook.parent / parsed.path).resolve()
            if not within(destination, run_root) or destination.suffix.lower() not in {".html", ".htm", ".json", ".png", ".jpg", ".jpeg", ".md", ".txt", ".pdf", ".xlsx"}:
                return match.group()
            removals.add(a.get("Id"))
            changes.append({"part": name, "action": "disable_draft_package_hyperlink", "id": a.get("Id"), "targetSha256": digest(target.encode()), "targetExists": destination.is_file()})
            return b""
        updated = re.sub(pattern, relationship, data, flags=re.S)
        if removals:
            def hyperlink(match):
                return b"" if attrs(match.group()).get("r:id") in removals else match.group()
            sheet = re.sub(rb"<(?:\w+:)?hyperlink\b[^>]*(?:/>|>.*?</(?:\w+:)?hyperlink\s*>)", hyperlink, result[owner], flags=re.S)
            if sheet == result[owner]:
                raise ValueError("draft_hyperlink_reference_not_removed")
            result[owner] = sheet
            result[name] = updated
    return result, changes


def emit_zip(source, parts):
    if load_parts(source) == parts:
        return source
    output = io.BytesIO()
    with zipfile.ZipFile(io.BytesIO(source)) as old, zipfile.ZipFile(output, "w") as new:
        for info in old.infolist():
            # Preserve original member order, timestamps, compression and attributes.
            new.writestr(info, parts.get(info.filename, b""))
    return output.getvalue()


def strings(value):
    if isinstance(value, str):
        yield value
    elif isinstance(value, dict):
        for key in sorted(value):
            yield from strings(value[key])
    elif isinstance(value, list):
        for item in value:
            yield from strings(item)


def discover(package, page, record):
    roots = []
    issues = []
    for value in record.get("provenance", {}).get("runFolders", []):
        root = Path(value)
        root = (package / root).resolve() if not root.is_absolute() else root.resolve()
        if root.is_dir():
            roots.append(root)
        else:
            issues.append({"code": "missing_run_folder", "folderName": root.name})
    roots = sorted(set(roots))
    candidates = {}
    for root in roots:
        for path in sorted(root.rglob("*")):
            if path.is_file() and path.suffix.lower() == ".xlsx" and within(path.resolve(), root):
                candidates[path.resolve()] = root
    texts = list(strings(record))
    for locale in page.get("locales", []):
        entry = page.get(locale, {})
        for key in ("markdown", "html"):
            if key in entry:
                path = (package / entry[key]).resolve()
                if not within(path, package) or not path.is_file():
                    issues.append({"code": "missing_or_unsafe_localized_document", "locale": locale, "format": key})
                else:
                    texts.append(path.read_text(encoding="utf-8"))
    # Matches link destinations, backticks and bare paths (not just Markdown links).
    references = set()
    for text in texts:
        for match in re.finditer(r"[^\s<>\"'`()\[\]]+\.xlsx\b", html.unescape(text), re.I):
            ref = urllib.parse.unquote(match.group()).split("#")[0].split("?")[0]
            if urllib.parse.urlsplit(ref).scheme not in {"", "file"}:
                continue
            references.add(ref)
            clean = re.sub(r"^file:(?://)?", "", ref)
            for root in roots:
                for base in (package, package.parent, root, root.parent):
                    path = (base / clean).resolve()
                    if within(path, root) and path.is_file() and path.suffix.lower() == ".xlsx":
                        candidates[path] = root
    return roots, candidates, sorted(references), issues


def audit(path, root):
    source = path.read_bytes()
    row = {"source": path.relative_to(root).as_posix(), "runFolder": root.name,
           "sourceSha256": digest(source), "publicUrl": None, "outputSha256": None,
           "decision": "excluded", "checks": {}, "changes": [], "flags": []}
    ownership = OWNERSHIP.get(root.name + "/" + row["source"])
    row["ownership"] = dict(ownership or {}, verified=bool(ownership and ownership["sourceSha256"] == row["sourceSha256"]),
                            basis="reviewed-generator-output-and-pinned-source-artifact")
    try:
        parts = load_parts(source)
        before, original_flags = inspect(parts)
        after_parts, changes = sanitize(parts, path, root)
        after, final_flags = inspect(after_parts) if after_parts != parts else (before, original_flags)
        row["changes"] = changes
        row["inspection"] = before
        row["checks"] = {"allPackagePartsInspected": before["counts"]["xmlParts"] == len(parts),
                         "xmlParsed": True, "postSanitizationScan": True,
                         "noMacrosEmbeddingsOrDataConnections": not any(f["code"] in {"active_or_embedded_content", "active_content_declaration", "opaque_package_part", "external_or_active_formula"} for f in final_flags),
                         "externalRelationshipCountBefore": sum(p["modes"].get("External", 0) for p in before["relationships"]),
                         "externalRelationshipCountAfter": sum(p["modes"].get("External", 0) for p in after["relationships"]),
                         "formulaCachesPreserved": before["formulaCacheSignature"] == after["formulaCacheSignature"],
                         "noRecalculation": True, "changedParts": sorted(n for n in parts if parts[n] != after_parts[n]),
                         "unchangedPartPayloadsPreserved": True, "outputBlockingFlags": sum(f["blocking"] for f in final_flags)}
        final_keys = {json.dumps(f, sort_keys=True) for f in final_flags}
        original_keys = {json.dumps(f, sort_keys=True) for f in original_flags}
        row["flags"] = [dict(f, resolvedBySanitization=json.dumps(f, sort_keys=True) not in final_keys) for f in original_flags]
        row["flags"].extend(f for f in final_flags if json.dumps(f, sort_keys=True) not in original_keys)
        if not row["ownership"]["verified"]:
            row["flags"].append(flag("unverified_generated_ownership", ""))
        if any(EXCLUDED_DIRS.fullmatch(s) for s in path.relative_to(root).parts[:-1]) or path.name.startswith(("~$", ".")):
            row["flags"].append(flag("nonpublication_evidence_or_third_party_copy", "", blocking=True))
        if not {"[Content_Types].xml", "xl/workbook.xml", "_rels/.rels"}.issubset(parts):
            row["flags"].append(flag("not_a_workbook_package", ""))
        blocking = any(f["blocking"] and not f.get("resolvedBySanitization", False) for f in row["flags"])
        if not blocking and row["checks"]["formulaCachesPreserved"]:
            output = emit_zip(source, after_parts)
            if load_parts(output) != after_parts:
                raise ValueError("output_package_verification_failed")
            row["decision"] = "approved_sanitized" if changes else "approved"
            row["outputSha256"] = digest(output)
            return row, output
    except (OSError, ValueError, KeyError, IndexError, ET.ParseError, zipfile.BadZipFile, RuntimeError) as error:
        row["flags"].append(flag("inspection_failed", "", value=type(error).__name__ + ":" + str(error)))
        row["checks"]["inspectionFailed"] = True
    return row, None


def run(package, output):
    manifest_bytes = (package / "manifest.json").read_bytes()
    manifest = json.loads(manifest_bytes)
    pages = manifest["pages"]
    if not isinstance(pages, dict):
        raise ValueError("manifest.pages must be keyed by slug")
    report = {"schemaVersion": 1, "policy": POLICY, "manifestSha256": digest(manifest_bytes),
              "screening": ["credentials", "private_paths", "emails", "phones", "person_identifiers_and_populated_fields",
                            "metadata", "relationships", "comments_and_authors", "all_xml_text_attributes_and_rich_text",
                            "external_links_and_formulas", "macros_connections_embeddings_and_opaque_parts"],
              "guides": {}, "summary": {}}
    pending = {}
    all_rows = []
    for slug, page in sorted(pages.items()):
        if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", slug):
            raise ValueError("unsafe guide slug")
        semantic_path = (package / page["data"]).resolve()
        if not within(semantic_path, package):
            raise ValueError("semantic record outside package")
        semantic_bytes = semantic_path.read_bytes()
        record = json.loads(semantic_bytes)
        roots, candidates, references, issues = discover(package, page, record)
        guide = {"semanticSha256": digest(semantic_bytes), "runFolders": [r.name for r in roots],
                 "discovery": {"method": "recursive-provenance-and-local-links-including-bare-paths", "localWorkbookReferences": references,
                               "candidateCount": len(candidates)}, "workbooks": [], "excludedWorkbooks": [], "flags": issues}
        # Do not echo absolute private paths from source prose in the report.
        guide["discovery"]["localWorkbookReferences"] = [
            {"basename": Path(r).name, "referenceSha256": digest(r.encode())} for r in references]
        basename_counts = collections.Counter(path.name for path in candidates)
        for path, root in sorted(candidates.items(), key=lambda x: (x[1].name, str(x[0].relative_to(x[1])))):
            row, data = audit(path, root)
            if data is not None and basename_counts[path.name] > 1:
                row["decision"] = "excluded"
                row["outputSha256"] = None
                row["flags"].append(flag("ambiguous_public_basename", ""))
                data = None
            if data is not None:
                url = f"/scenarios/{slug}/{urllib.parse.quote(path.name)}"
                destination = output / "public" / "scenarios" / slug / path.name
                if not within(destination.resolve(), output):
                    raise ValueError("unsafe output path")
                row["publicUrl"] = url
                guide["workbooks"].append(row)
                pending[destination] = data
            else:
                guide["excludedWorkbooks"].append(row)
            all_rows.append(row)
        report["guides"][slug] = guide
    report["summary"] = {"guidesAudited": len(pages), "guidesWithWorkbooks": sum(bool(g["workbooks"]) for g in report["guides"].values()),
        "candidatesInspected": len(all_rows), "approved": len(pending),
        "excluded": sum(r["decision"] == "excluded" for r in all_rows),
        "sanitized": sum(r["decision"] == "approved_sanitized" for r in all_rows),
        "changes": dict(sorted(collections.Counter(c["action"] for r in all_rows if r["decision"] != "excluded" for c in r["changes"]).items())),
        "inspectedCounts": dict(sorted(collections.Counter({k: sum(r.get("inspection", {}).get("counts", {}).get(k, 0) for r in all_rows) for k in (all_rows[0].get("inspection", {}).get("counts", {}) if all_rows else {})}).items())),
        "inspectionFailures": sum(r["checks"].get("inspectionFailed", False) for r in all_rows)}
    report_path = output / "docs" / "scenarios-workbook-privacy.json"
    # Remove only paths previously owned by this gate, never unrelated assets.
    if report_path.is_file():
        old = json.loads(report_path.read_text())
        if old.get("policy") == POLICY:
            for guide in old.get("guides", {}).values():
                for row in guide.get("workbooks", []):
                    url = urllib.parse.unquote(row.get("publicUrl") or "")
                    previous = output / "public" / url.lstrip("/")
                    if url.startswith("/scenarios/") and previous.suffix.lower() == ".xlsx" and within(previous.resolve(), output / "public" / "scenarios") and previous not in pending:
                        previous.unlink(missing_ok=True)
    for path, data in pending.items():
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(data)
    report_path.parent.mkdir(parents=True, exist_ok=True)
    # One compact guide object per line: complete evidence without 20k-line reports.
    compact = lambda value: json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":"))
    lines = ["{"]
    for key in sorted(report):
        if key == "guides":
            rows = ["    " + compact(slug) + ":" + compact(guide) for slug, guide in sorted(report[key].items())]
            lines.append('  "guides":{\n' + ",\n".join(rows) + "\n  },")
        else:
            lines.append("  " + compact(key) + ":" + compact(report[key]) + ",")
    lines[-1] = lines[-1].rstrip(",")
    report_path.write_text("\n".join(lines) + "\n}\n", encoding="utf-8")
    print(json.dumps(report["summary"], ensure_ascii=False, sort_keys=True))
    return 1 if report["summary"]["inspectionFailures"] or any(g["flags"] for g in report["guides"].values()) else 0


def self_test():
    """In-memory regression fixtures; no workbook engine or filesystem writes."""
    tests = []
    def check(name, condition):
        if not condition:
            raise AssertionError(name)
        tests.append(name)
    cases = [("credential", "api_key=abcdefgh12345678"), ("email", "person@example.com"),
             ("phone", "+1 (202) 555-0123"), ("phone", "phone: 13800138000"),
             ("person_identifier", "SSN: 123-45-6789"), ("person_identifier", "passport number: AB1234567"),
             ("private_path", "/Users/private-person/file.xlsx"), ("private_path", "C:\\Users\\private\\file"),
             ("private_path", "%2FVolumes%2FPrivate%2Ffile"),
             ("url_credentials", "https://user:pass@example.org/path"),
             ("sensitive_url_parameter", "https://example.org/?api_key=not-a-real-key"),
             ("email", "https://example.org/contact/person@example.com"),
             ("private_network_url", "http://127.0.0.1/file")]
    for code, value in cases:
        check(code + ":" + value, code in {f["code"] for f in scan_value(value, "test", "value")})
    for value in ["2026-11-05", "Fictional income: 35000", "Passport: plan for six months validity",
                  "https://example.org/home/service", "https://wwwmat.sat.gob.mx/cs/Satellite?blobkey=id"]:
        check("not-sensitive:" + value, not scan_value(value, "test", "value"))
    parts = {
        "[Content_Types].xml": b'<Types/>', "_rels/.rels": b'<Relationships/>',
        "xl/workbook.xml": b'<workbook/>',
        "docProps/core.xml": b'<core xmlns:dc="urn:dc"><dc:creator>creator</dc:creator><lastModifiedBy>Person</lastModifiedBy><path>/Users/private/file</path></core>',
        "xl/sharedStrings.xml": b'<sst><si><t>Fictional demo income</t></si></sst>',
        "xl/worksheets/sheet1.xml": b'<worksheet xmlns:r="urn:r"><c r="A1"><f>1+2</f><v>3</v></c><hyperlinks><hyperlink ref="A1" r:id="rId1"/></hyperlinks></worksheet>',
        "xl/worksheets/_rels/sheet1.xml.rels": b'<Relationships><Relationship Id="rId1" Type="urn/hyperlink" Target="guide.html" TargetMode="External"/></Relationships>'}
    root = Path(__file__).resolve().parents[2]
    clean, changes = sanitize(parts, root / "example.xlsx", root)
    check("bounded-metadata-and-draft-link-patches", len(changes) == 4)
    check("creator-text-not-tag-name", b'<dc:creator>DeTars</dc:creator>' in clean["docProps/core.xml"])
    check("no-local-metadata", b"/Users/" not in clean["docProps/core.xml"])
    check("hyperlink-reference-removed", b"rId1" not in clean["xl/worksheets/sheet1.xml"])
    check("formula-cache-preservation", formula_cache_signature(parts) == formula_cache_signature(clean))
    check("untouched-shared-strings", parts["xl/sharedStrings.xml"] == clean["xl/sharedStrings.xml"])
    check("sanitized-clean-rescan", not inspect(clean)[1])
    for part, body, code in [
        ("xl/sharedStrings.xml", b'<sst><si><r><t>person@</t></r><r><t>example.com</t></r></si></sst>', "email"),
        ("xl/comments1.xml", b'<comments><authors><author>Real Person</author></authors><comment><t>person@example.com</t></comment></comments>', "unrecognized_comment_author"),
        ("xl/other.xml", b'<x><!-- person@example.com --></x>', "email"),
        ("xl/other.xml", b'<x><a/>person@example.com</x>', "email"),
        ("xl/other.xml", b'<!-- person@example.com --><x/>', "email"),
        ("xl/other.xml", b'<?private /Users/private/file?><x/>', "private_path"),
        ("xl/other.xml", b'<x xmlns:private="/Users/private/file"/>', "private_path"),
        ("xl/other.xml", b'<x>https://example.org/download?path=/Users/private/file</x>', "private_path"),
        ("xl/worksheets/sheet1.xml", b'<sheet><c r="A1" t="inlineStr"><is><t>Phone</t></is></c><c r="A2"><v>13800138000</v></c></sheet>', "populated_contact_field"),
        ("xl/worksheets/sheet1.xml", b'<sheet><c r="A1" t="inlineStr"><is><t>Full name</t></is></c><c r="A2" t="inlineStr"><is><t>Real Person</t></is></c></sheet>', "populated_person_field"),
        ("xl/worksheets/sheet1.xml", b'<sheet><c><f>WEBSERVICE("https://example.org")</f><v>1</v></c></sheet>', "external_or_active_formula"),
        ("xl/embeddings/object.bin", b'opaque', "active_or_embedded_content"),
        ("[Content_Types].xml", b'<Types><Override ContentType="application/vnd.ms-excel.sheet.macroEnabled.main+xml"/></Types>', "active_content_declaration")]:
        check("inspect:" + code + ":" + part, code in {f["code"] for f in inspect(dict(clean, **{part: body}))[1]})
    formula_part = b'<sheet><c><f>Inputs!B27&amp;IF(Inputs!B28&gt;0," | ACTION: "&amp;Inputs!B28," | No overdue")</f><v>1</v></c></sheet>'
    check("pipe-in-formula-string-not-DDE", not inspect(dict(clean, **{"xl/worksheets/sheet1.xml": formula_part}))[1])
    stream = io.BytesIO()
    with zipfile.ZipFile(stream, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        for name, data in parts.items():
            archive.writestr(name, data)
    source = stream.getvalue()
    first = emit_zip(source, clean)
    check("deterministic-zip-rewrite", first == emit_zip(source, clean))
    check("zip-readback-exact-payloads", load_parts(first) == clean)
    check("unchanged-package-byte-identity", emit_zip(source, parts) == source)
    class MemoryBook:
        name = "bali-comparison.xlsx"
        parent = root
        def read_bytes(self):
            return source
        def relative_to(self, _root):
            return Path(self.name)
    denied, payload = audit(MemoryBook(), Path("/unavailable/bali-rent-sol"))
    check("known-name-unreviewed-bytes-denied", payload is None and not denied["ownership"]["verified"])
    MemoryBook.name = "unreviewed-new-arrival.xlsx"
    denied, payload = audit(MemoryBook(), root)
    check("future-unowned-workbook-denied", payload is None and any(f["code"] == "unverified_generated_ownership" for f in denied["flags"]))
    print(json.dumps({"selfTests": len(tests), "status": "passed", "tests": tests}, sort_keys=True))
    return 0


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--package", type=Path, help="Current i18n package directory")
    parser.add_argument("--output", type=Path, help="Repository root")
    parser.add_argument("--self-test", action="store_true", help="Run in-memory privacy and preservation regressions")
    args = parser.parse_args()
    if args.self_test:
        return self_test()
    if args.package is None or args.output is None:
        parser.error("--package and --output are required unless --self-test is used")
    return run(args.package.resolve(), args.output.resolve())


if __name__ == "__main__":
    sys.exit(main())
