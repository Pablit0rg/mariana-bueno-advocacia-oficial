{ pkgs, ... }: {
  # Qual canal nixpkgs usar
  channel = "stable-23.11"; 

  packages = [
    pkgs.nodejs_20 #
    pkgs.python3
    pkgs.python3Packages.pip
    pkgs.python3Packages.virtualenv
  ];

  env = {};

  idx = {
    # Extensões necessárias
    extensions = [
      "ms-python.python"
    ];

    # Configuração da Prévia (O que estava faltando)
    previews = {
      enable = true;
      previews = {
        web = {
          # O comando que o sistema vai rodar sozinho
          command = ["npm" "run" "dev"];
          manager = "web";
        };
      };
    };
  };
}