import shutil
import os

source_dir = "/Users/shashank/escp finance/student for finance"
dest_dir = "/Users/shashank/escp finance/escp-finance/public/team"

mapping = {
    "Camilla Barra_ Marketing Associate_.jpg": "camilla-barra.jpg",
    "Davide_Biselli_Research_Associate.jpg": "davide-biselli.jpg",
    "Edoardo Cerrano- Head of HR.jpg": "edoardo-cerrano.jpg",
    "Emanuele Ferrara_HR Associate.JPG": "emanuele-ferrara.jpg",
    "Federico_Tempestini_.Research_Associate.jpg": "federico-tempestini.jpg",
    "Flavio_Antonuzzo_ Co-Head of Strategy.png": "flavio-antonuzzo.png",
    "Francesco_Maria_Liaci_Marketing Associate.jpg": "francesco-maria-liaci.jpg",
    "Frederic_Wessling_Melonari_Research_Associate.jpg": "frederic-wessling-melonari.jpg",
    "Giorgio_D'Innocenzo.jpg": "giorgio-dinnocenzo.jpg",
    "Giovanni_Ciccarello.jpg": "giovanni-ciccarello.jpg",
    "Giuseppe_Mansueto Co-Head of Research.png": "giuseppe-mansueto.png",
    "Inès Desmaretz_.jpg": "ines-desmaretz.jpg",
    "Kaitsas_Francesco_Co-Head_Articles.jpg": "francesco-kaitsas.jpg",
    "Marina_Meucci head of linkedin.png": "marina-meucci.png",
    "Martina Proietti Silvestri.jpg": "martina-proietti-silvestri.jpg",
    "Rodolfo_Barberis Hr Associate.jpg": "rodolfo-barberis.jpg",
    "Valentina_Petrini_Head of Marketing .jpeg": "valentina-petrini.jpg",
    "Wangjingyi-Tech associate.jpg": "jingyi-wang.jpg",
    "tommaso donati_HR associate.jpeg": "tommaso-donati.jpg",
    "tommaso girani.png": "tommaso-girani.png",
    # New additions - missing team members
    "Adriano_Cogorno Co-Head of Research.jpg": "adriano-cogorno.jpg",
    "Alessandra_Boarolo HR Associate_.jpg": "alessandra-boarolo.jpg",
    "alessio-penzo.jpg": "alessio-penzo.jpg",
    "Carlo Giulio Rizzuto_strategy associate .jpg": "carlo-giulio-rizzuto.jpg",
    "daria-iannuzzi.jpg": "daria-iannuzzi.jpg",
    "carlo-giulio-rizzuto-alt.jpg": "carlo-giulio-rizzuto-alt.jpg"
}

print(f"Starting copy from {source_dir} to {dest_dir}")

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

for src_name, dest_name in mapping.items():
    src_path = os.path.join(source_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    
    try:
        if os.path.exists(src_path):
            shutil.copy2(src_path, dest_path)
            print(f"Copied: {src_name} -> {dest_name}")
        else:
            print(f"Source not found: {src_name}")
    except Exception as e:
        print(f"Error copying {src_name}: {e}")

print("Copy process completed.")
