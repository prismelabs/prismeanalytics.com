---
sidebar_position: 2
---

# Docker Compose Deployment

This page explain briefly how to setup a Prisme Analytics instance using docker
compose.

## Prerequisite

First, you have to make sure to have `docker` (with `docker compose` command)
installed. Otherwise, please follow official instructions available
[here](https://docs.docker.com/get-docker/).

## Setting up the stack

Once you're ready, you can view and download our maintained `docker-compose.yml`
[here](https://github.com/prismelabs/analytics/blob/master/deploy/docker-compose.yml).
It is pretty straightforward and simple as Prisme Analytics is a single binary.

:::note
Make sure to read and fully understand the content of the file before deploying.
:::

Once you downloaded and read the file, run the following command in the same directory
to start your environment:

```shell
docker compose up
# If you want to detach containers from your terminal.
docker compose up -d
```

That's it! you have a local Prisme Analytics instance running.

You can see all started containers and their status using `docker ps`.

If one or some of them exited prematurely, you can see logs using `docker logs <container_name>`
and start troubleshooting.

:::tip
Prisme logs are formatted as JSON, one entry per line. Prisme follows
[`bunyan`](https://github.com/trentm/node-bunyan) format so you can pipe logs
to bunyan CLI to get a more human readable output.
:::

## Before going live

Here are some recommandations before going live:
* Don't expose your instances directly to the entire internet, use a reverse proxy with
TLS capabilities such as [traefik](https://traefik.io/traefik/) or
[caddy](https://caddyserver.com/)
* Make and test your backups
