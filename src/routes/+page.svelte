<script>
import config from '/src/config'
import PostSection from '$lib/PostSection.svelte'
import ArchiveSection from '$lib/ArchiveSection.svelte'
import '../css/body.css'

export let data
</script>

<svelte:head>
  <title>{config.siteTitle} &ndash; {config.siteTagline}</title>
  <meta name="description" content={data.post.description} />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lustria" />
</svelte:head>

<PostSection post={data.post} />

<ArchiveSection />
