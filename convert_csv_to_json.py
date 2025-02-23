# # PROCEDURES
# import csv
# import json

# csv_file_path = "src/data/procedures.csv"
# json_file_path = "src/data/procedures.json"

# procedures = {"major": [], "minor": []}

# with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
#     reader = csv.DictReader(csvfile)
#     for row in reader:
#         procedure = {
#             "id": int(row["Procedure ID"]),
#             "image": f"/src/assets/procedures/{row['Image Filename']}",
#             "name": row["Procedure Name"],
#             "description": row["Procedure Description"],
#             "tools": [tool.strip() for tool in row["Tools"].split(",") if tool.strip()]
#         }
#         category = "major" if row["Procedure Type"].strip().lower() == "major" else "minor"
#         procedures[category].append(procedure)

# # Write JSON file
# with open(json_file_path, "w", encoding="utf-8") as jsonfile:
#     json.dump(procedures, jsonfile, indent=4)

# print("CSV successfully converted to JSON.")

# --------------------------------------------------------

# TOOLS

import csv
import json

# Read CSV and convert to JSON
tools = []
with open("src/data/tools.csv", newline="", encoding="utf-8") as csvfile:
    reader = csv.DictReader(csvfile, delimiter="\t")  # Adjust delimiter if needed
    for row in reader:
        tools.append({
            "id": int(row["Tool ID"]),
            "image": f"/assets/tools/{row['Image FileName']}",
            "name": row["Tool Name"],
            "description": row["Tool Description"],
            "uses": row["Tool Uses"],
            "other_names": row["Other Names"],
            "handling": row["Handling/Sterilization"]
        })

# Save to JSON
with open("src/data/tools.json", "w", encoding="utf-8") as jsonfile:
    json.dump(tools, jsonfile, indent=4)

print("Conversion complete! JSON file saved as tools.json.")
