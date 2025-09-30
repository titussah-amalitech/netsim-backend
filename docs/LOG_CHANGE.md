Log model change: deviceType field

What changed

- Added `deviceType` to `models/Log.model.js` as an optional string enum (router, switch, server, pc, other).
- When logs are generated (in `services/logs.service.js`), the service now sets `deviceType` from the Device's `type` field so each log records the device model type at creation time.

Why

Storing `deviceType` on the Log document makes it easier to query and display logs by device model type without needing to populate the Device each time. It also preserves the device type value as-of the log timestamp even if the Device is later changed.

Notes

- Existing logs in the database will not have `deviceType` set until new logs are created or backfilled.
- If you want `deviceType` to be required, change the schema in `models/Log.model.js` to set `required: true` and run a migration/backfill.
