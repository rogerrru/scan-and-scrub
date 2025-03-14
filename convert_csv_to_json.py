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
            "image": row['Image Filename'],
            "imageCitation": row['Image Citation'],
            "imageUrl": row['Image URL'],
            "name": row["Procedure Name"],
            "description": row["Procedure Description"],
            "indications": row["Indications"],
            "instruments": [instrument.strip() for instrument in row["Instruments"].split(",") if instrument.strip()]
        }
        category = "major" if row["Procedure Type"].strip().lower() == "major" else "minor"
        procedures[category].append(procedure)

# Write JSON file
with open(json_file_path, "w", encoding="utf-8") as jsonfile:
    json.dump(procedures, jsonfile, indent=4)

print("CSV successfully converted to JSON.")


# --------------------------------------------------------

# TOOLS

# import csv
# import json

# # Read CSV and convert to JSON
# tools = []
# with open("src/data/tools.csv", newline="", encoding="utf-8") as csvfile:
#     reader = csv.DictReader(csvfile, delimiter=",")  # Use comma as delimiter
#     for row in reader:
#         tools.append({
#             "id": int(row["Instrument ID"]),
#             "image": row['Image Filename'].strip(),
#             "imageCitation": row['Image Citation'].strip(),
#             "name": row["Instrument Name"].strip(),
#             "description": row["Instrument Description"].strip(),
#             "uses": row["Instrument Uses"].strip(),
#             "other_names": row["Other Names"].strip(),
#             "imageUrl": row["Image URL"].strip()
#         })

# # Save to JSON
# with open("src/data/tools.json", "w", encoding="utf-8") as jsonfile:
#     json.dump(tools, jsonfile, indent=4)

# print("Conversion complete! JSON file saved as tools.json.")
