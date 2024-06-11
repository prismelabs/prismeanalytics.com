# How to Self-Host Prisme with Docker Compose

This guides shows you how to setup your own Prisme Analytics server using
[Docker](https://docker.com).

## Prerequisites

* You have installed [Docker](https://docs.docker.com/engine/install/) and
[Docker Compose](https://docs.docker.com/compose/install/).

## Step 1: Download Docker Compose file

Download the official `docker-compose.yml` file maintained within
[Prisme repository](https://github.com/prismelabs/analytics/blob/v0.15.0/deploy/docker-compose.yml).

It is recommended to use our official Docker Compose file as it uses
[ClickHouse](https://clickhouse.com) and [Grafana](https://grafana.com)
versions that are tested to work with Prisme.

## Step 2: Configure services

Our Docker Compose file comes with sane default but there is some options that you
**must** tweak. Lines preceded by an `EDIT_ME: ...` comment must be edited.

Be sure to read all [Prisme configuration options](../../reference/server/server-modes).

You can also configure Grafana and ClickHouse as you like.

## Step 3: Start services

Once you downloaded the file and configured services, run the following command
in the same directory to start your environment:

```sh
docker compose up
[+] Running 1/0
 ✔ Container deploy-clickhouse-1  Running                                                                                                                                             0.0s
Attaching to clickhouse-1, grafana-1, prisme-1
grafana-1     | Grafana server is running with elevated privileges. This is not recommended
grafana-1     | logger=settings t=2024-05-13T14:29:22.262736066Z level=info msg="Starting Grafana" version=10.3.3 commit=252761264e22ece57204b327f9130d3b44592c01 branch=HEAD compiled=2024-05-13T14:29:22Z
grafana-1     | logger=settings t=2024-05-13T14:29:22.262907119Z level=info msg="Config loaded from" file=/usr/share/grafana/conf/defaults.ini
grafana-1     | logger=settings t=2024-05-13T14:29:22.2629132Z level=info msg="Config loaded from" file=/etc/grafana/grafana.ini
grafana-1     | logger=settings t=2024-05-13T14:29:22.262915544Z level=info msg="Config overridden from command line" arg="default.paths.data=/var/lib/grafana"
grafana-1     | logger=settings t=2024-05-13T14:29:22.262917939Z level=info msg="Config overridden from command line" arg="default.paths.logs=/var/log/grafana"
grafana-1     | logger=settings t=2024-05-13T14:29:22.262922587Z level=info msg="Config overridden from command line" arg="default.paths.plugins=/var/lib/grafana/plugins"
grafana-1     | logger=settings t=2024-05-13T14:29:22.262924631Z level=info msg="Config overridden from command line" arg="default.paths.provisioning=/etc/grafana/provisioning"
grafana-1     | logger=settings t=2024-05-13T14:29:22.262927046Z level=info msg="Config overridden from command line" arg="default.log.mode=console"
...

# If you want to detach containers from your terminal.
docker compose up -d
```

You should start seeing tons of log from started services.

You can check that your services are healthy using `docker ps`. If a service
is missing or has exited prematurely, you can see logs using
`docker logs <container_name>` and start troubleshooting.

:::tip
Prisme logs are formatted as JSON, one entry per line. Prisme follows
[`bunyan`](https://github.com/trentm/node-bunyan) format so you can pipe logs
to bunyan CLI to get a more human readable output: `docker logs prisme 2>&1 | bunyan`
:::

## Step 4: Going further

If you're really planning to host and maintain your own Prisme Analytics instance,
consider:
* putting your services behind a reverse proxy with TLS support such as
[caddy](https://caddyserver.com/), [traefik](https://traefik.io/traefik) or
[nginx](https://nginx.org/)
* automating and testing your backups
* watching [Prisme Analytics repository](https://github.com/prismelabs/analytics) to
be notified when new version is released

