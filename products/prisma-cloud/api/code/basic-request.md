---
id: basic-request
title: Application Security API Request Basics
sidebar_label: API Request Basics
keywords:
  - Developer
  - Prisma
  - Prisma Cloud
  - Reference
  - API
---

Use the following guidelines to ensure that your Application Security API requests to Prisma Cloud are successful.

See [Prisma Cloud Application Security](https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin-code-security.html) for more information and for directions to enable Application Security on Prisma Cloud.

## Prerequisites for a Application Security Request

To make a Application Security API request, you must have the right privileges and authorization for the request.

### Application Security Access

To have the right privileges to make a Application Security API request, you must set up:

- [Administrator access](https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin-code-security/get-started/setup-administrator-access.html)
- [Developer access](https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin-code-security/get-started/setup-developer-access.html)

### Application Security API Authorization

To have the right authorization for a Application Security API request, follow the high-level steps below:

1. [Obtain an access key](https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin/manage-prisma-cloud-administrators/create-access-keys.html) from your Prisma Cloud system administrator.
2. Make a CSPM API request to [log in](/prisma-cloud/api/cspm/app-login) . A successful request returns a JSON Web Token (JWT).

All the Application Security API requests use this JWT in the API request [header](/prisma-cloud/api/code/api-headers) for authorization. Note that for security, a JWT is valid for only ten minutes. If your session must be active beyond that limit, you can [extend a session](/prisma-cloud/api/cspm/extend-session/).

See [Getting Started](/prisma-cloud/docs/cspm/cspm-gs) for detailed steps to obtain an access key and to [log in](/prisma-cloud/api/cspm/app-login/) to obtain a JWT token.

## Components of a Application Security Request

The sections below note specific details about some of the components of a successful CSPM API request.

### Base URL

The base URL of your Application Security API request depends on the region of your Prisma Cloud tenant and is similar to your Prisma Cloud administrative console URL. See the Prisma Cloud [URLs](/prisma-cloud/api/cspm/api-urls) for a list of Prisma Cloud console URLs and corresponding API base URLs.

### HTTP Methods

The Application Security API uses standard HTTP methods, such as `GET`, `POST`, `PUT`, and `DELETE`.

### Required Request Headers

See [Headers](/prisma-cloud/api/code/api-headers) for information about required request headers.
