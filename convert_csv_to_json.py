# PROCEDURES
import csv
import json

csv_file_path = "src/data/procedures.csv"
json_file_path = "src/data/procedures.json"

procedures = {"major": [], "minor": []}

with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        procedure = {
            "id": int(row["Procedure ID"]),
            "image": f"/src/assets/procedures/{row['Image Filename']}",
            "name": row["Procedure Name"],
            "description": row["Procedure Description"]
        }
        category = "major" if row["Procedure Type"].strip().lower() == "major" else "minor"
        procedures[category].append(procedure)

# Write JSON file
with open(json_file_path, "w", encoding="utf-8") as jsonfile:
    json.dump(procedures, jsonfile, indent=4)

print("CSV successfully converted to JSON.")

# --------------------------------------------------------

# TOOLS

# csv_file_path = "src/data/tools.csv"
# json_file_path = "src/data/tools.json"

