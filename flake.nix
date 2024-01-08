{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = { flake-utils, nixpkgs, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        lib = pkgs.lib;
      in
      {
        devShells = {
          default = pkgs.mkShell rec {
            buildInputs = with pkgs; [
              deno
              netlify-cli
              vips
              stdenv.cc.cc.lib
              pkg-config
            ];

            LD_LIBRARY_PATH = "${lib.makeLibraryPath buildInputs}";
          };
        };
      }
    );
}

