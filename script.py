import json
import ast

def correct_list_fields(data):
    list_fields = ['genres', 'characters', 'ratingsByStars', 'setting', 'awards']
    
    for book in data:
        for field in list_fields:
            if field in book and isinstance(book[field], str):
                try:
                    book[field] = ast.literal_eval(book[field])
                except (ValueError, SyntaxError):
                    print(f"Erro ao converter o campo {field} do livro {book['title']}")
    
    return data

try:
    with open('dataset.json', 'r', encoding='utf-8') as file:
        data = json.load(file)
except json.JSONDecodeError as e:
    print(f"Erro ao decodificar JSON: {e}")
    print(f"Erro na linha {e.lineno}, coluna {e.colno}")
    print(f"Mensagem de erro: {e.msg}")
    raise

corrected_data = correct_list_fields(data)

with open('dataset_corrigido.json', 'w', encoding='utf-8') as file:
    json.dump(corrected_data, file, ensure_ascii=False, indent=4)

print("Campos corrigidos e dados guardados em 'dataset_corrected.json'.")
