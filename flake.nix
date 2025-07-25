{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    gis = {
      url = "github:negrel/google-indexing-script";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    indexnow = {
      url = "github:negrel/indexnow";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    {
      flake-utils,
      nixpkgs,
      gis,
      indexnow,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        lib = pkgs.lib;
      in
      {
        devShells = {
          default = pkgs.mkShell rec {
            buildInputs =
              with pkgs;
              [
                deno
                nodejs_20
                netlify-cli
                vips
                stdenv.cc.cc.lib
                pkg-config

                # Static HTTP server
                httplz

                # Spell checker
                nodePackages_latest.cspell
                # Broken link checker
                linkchecker
              ]
              ++ [ gis.packages.${system}.default ]
              ++ [ indexnow.packages.${system}.default ];

            LD_LIBRARY_PATH = "${lib.makeLibraryPath buildInputs}";
          };
        };
      }
    );
}
