<div class="banner-full-height">
  {if isset($banner_img)}
    <img src="{$banner_img}">
    <div class="banner-caption">
      <p>{$banner_desc}</p>
    </div>
  {else}
  <div class="banner-caption">
    <p>{$banner_desc}</p>
  </div>
  {/if}
  <a>
    <span class="material-icons">
      keyboard_arrow_down
    </span>
  </a> 
</div>