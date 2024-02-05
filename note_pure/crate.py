from pathlib import Path
import json
path = Path("./story.json")
content = path.read_text()
j = json.loads(content)
while j:
    print(j)



