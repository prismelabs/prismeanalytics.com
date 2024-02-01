# Server Modes

Prisme Analytics is configured via environment variables. You can customize your
Prisme Analytics instance by setting `PRISME_<option name>` environment variables.

Prisme Analytics can operate in two different modes:
* `default`: a full-featured server
* `ingestion`: a minimal server for event ingestion only

You can use `PRISME_MODE` environment variable to define your instance mode.

Depending on the chosen mode, certain options become applicable while others
remain inactive.

New modes may be added in the future.
