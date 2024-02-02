# Nix

Prisme Analytics uses [Nix](https://nixos.org/) for its development and for
building [official Docker Image](https://hub.docker.com/r/prismelabs/analytics).

## Flake

Here is a simple Nix Flake with a development shell configured with Prisme Analytics.


:::warning

Binary name (`server`) and Flake output name (`prisme-bin`) will change in next release.

:::

```nix
{
  inputs = {
    # Flake reference documentation.
    # https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html#flake-references
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    # Load https://github.com/prismelabs/analytics/blob/master/flake.nix
    prisme.url = "github:prismelabs/analytics";
  };

  outputs = { self, nixpkgs, prisme, ... }@inputs:
    let
      system = "x86_64-linux"; # Change if needed.
      pkgs = import nixpkgs { inherit system; };
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = [ prisme.packages.${system}.prisme-bin ];
      };
    };
}
```

Then you can run Prisme Analytics as follow:

```sh
# Enter dev shell.
nix develop

# Starts the server.
server
```
