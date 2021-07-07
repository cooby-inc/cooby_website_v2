import requests
import json

articleApiURL = 'https://script.google.com/macros/s/AKfycbznoiUUIqPVl-sNXpGUav7hMEyKGs-QL744rToEupE3414PKeHgmkrKBBitcYhLbpN9mQ/exec'
r = requests.get(articleApiURL)

with open('./src/articles.json', 'w', encoding='utf-8') as file:
  file.write(json.dumps(r.json(), indent=2, ensure_ascii=False))