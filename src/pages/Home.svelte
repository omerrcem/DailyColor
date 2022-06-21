<script lang="ts">
  import IncomingColors from '../partials/IncomingColors.svelte';

  import {Colors, ColorToHex} from '../utils/Constants';
  import {
    getStringDate,
    calculateDayColor,
    getIndexOfColor
  } from '../utils/Helpers';

  let color = calculateDayColor();
</script>

<div class="container">
  <h2
    class="mt-5"
    style="font-size: 100px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  >
    _
    <br />
    Günün Rengi
  </h2>

  <span class="d-block mb-2" style="font-size: 32px;">{getStringDate()}</span>

  <br />
  <div class="mt-3">
    <div
      style={`${
        color === Colors.WHITE && 'background-color: #333;'
      } width: fit-content;`}
      class={`${color === Colors.WHITE && 'px-3'} d-flex align-items-center`}
      >
      <span class="mr-2" style={`font-size: 50px; color:${ColorToHex[color]}`}
      >{color}</span
      >
      <img
      style="height: 70px"
      src={`/assets/svg/${getIndexOfColor(color)}.svg`}
      alt=""
    />
    </div>
  </div>

  <div style="position: fixed; bottom: 20px;">
    <span class="d-block mb-2" style="font-size: 32px; color: #444">
      Gelecek Günlerin Renkleri
    </span>
    <IncomingColors />
  </div>
</div>
