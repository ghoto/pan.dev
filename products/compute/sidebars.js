const computeVersions = require("./api/versions.json");
const {
  versionSelector,
  versionCrumb,
} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");

module.exports = {
  compute: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(computeVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`31-02`),
    },
    "compute/api/compute-api-reference-home",
    "compute/api/access-api-self-hosted",
    "compute/api/set-up-console",
    "compute/api/stable-endpoints",
    require("./api/sidebar"),
  ],
  compute_3003: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(computeVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`30-03`),
    },
    "compute/api/30-03/compute-api-reference-home",
    "compute/api/30-03/access-api-self-hosted",
    "compute/api/30-03/set-up-console",
    "compute/api/30-03/stable-endpoints",
    require("./api/30-03/sidebar"),
  ],
  compute_2212: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(computeVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`22-12`),
    },
    "compute/api/22-12/compute-api-reference-home",
    "compute/api/22-12/access-api-self-hosted",
    "compute/api/22-12/set-up-console",
    "compute/api/22-12/stable-endpoints",
    require("./api/22-12/sidebar"),
  ],
};
