<template>
  <h1>Resources</h1>
    <div class="it-text-box">
      <div class="card-up resource-card">
        <h2 style="margin-bottom: 20px;">Unsplash</h2>

        <p>
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a> is internet’s source of freely usable images.
        </p>
        <p>
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://unsplash-assets.imgix.net/marketing/press-logotype.svg?auto=format&fit=crop&q=60"
              width="100%"
              alt="unsplash"
              srcset
            />
          </a>
        </p>
        <p>Over 1 million free high-resolution images brought to you by the world’s most generous community of photographers.</p>
      </div>

      <div class="card-up resource-card">
        <h2 style="margin-bottom: 20px;">Material Icons</h2>

        <p>
          <a
            href="https://material.io/resources/icons/"
            target="_blank"
            rel="noopener noreferrer"
          >Material Icons</a> are delightful, beautifully crafted symbols for common actions and items.
        </p>
        <p>
          <a href="https://material.io/resources/icons/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://lh3.googleusercontent.com/-Bdu5yhyynw-Npepw3ERkztP_HRUfJurPpeVwK7zTmZncjE4p3h2bMfV9ao7SWPMNVZ5RWe1XZTQfHeHLj5_69BSXl0uueeaeUVd=w760-h380"
              width="100%"
              alt="unsplash"
              srcset
            />
          </a>
        </p>
        <p>Equal UI uses Material icons as a default icons library.</p>
      </div>

            <div class="card-up resource-card">
        <h2 style="margin-bottom: 20px;">Inter Font</h2>

        <p>
          <a
            href="https://rsms.me/inter/"
            target="_blank"
            rel="noopener noreferrer"
          >Inter</a> is a typeface carefully crafted & designed for computer screens by <a href="https://twitter.com/rsms" target="_blank" rel="noopener noreferrer">@rsms</a>.
        </p>
        <p>
          <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://rsms.me/inter/res/share.png"
              width="100%"
              alt="unsplash"
              srcset
            />
          </a>
        </p>
        <p>Equal UI uses Inter font as a default font in components.</p>
      </div>
    </div>
</template>

<style lang="less">
.resource-card {
  padding: 30px;

  & + & {
    margin-top: 20px;
  }

  > * + * {
    margin-top: 1.5rem;
  }

  > p {
    margin-top: 1.5rem;
  }
}
</style>