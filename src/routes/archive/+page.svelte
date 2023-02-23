<script>
import config from '/src/config'
import ArchiveSection from '$lib/ArchiveSection.svelte'
</script>

<svelte:head>
  <title>{config.siteTitle} Archive</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lustria" />
</svelte:head>

<ArchiveSection limit={false} />
