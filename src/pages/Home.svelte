<script lang="ts">
  import IncomingColors from '../partials/IncomingColors.svelte';

  import {Colors, ColorToHex} from '../utils/Constants';
  import {
    getStringDate,
    calculateDayColor,
    getIndexOfColor,
getTextColorByBackgroundColor
  } from '../utils/Helpers';

  let colorText = calculateDayColor(new Date('2022-06-11'));
  let textColor = getTextColorByBackgroundColor(colorText);
  let backgroundColor = ColorToHex[colorText];
  let index = getIndexOfColor(colorText);

  document.body.style.backgroundColor = backgroundColor;

</script>
<div class="container pb-5" style={`color:${textColor};`}>
  <h2
    class="mt-2"
    style="font-size: 100px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  >
    _
    <br />
    Günün Rengi
  </h2>

  <span class="d-block mb-2" style="font-size: 32px;">{getStringDate()}</span>

  <br />
  <div style={`background-color:${textColor}; width: fit-content`} class="mt-3 py-1 px-2 rounded">
    <div
      style={`${
        colorText === Colors.WHITE && 'background-color: #333;'
      } width: fit-content;`}
      class={`${colorText === Colors.WHITE && 'px-3'} d-flex align-items-center`}
      >
      <span class="mr-2" style={`font-size: 50px; color:${ColorToHex[colorText]}`}
      >{colorText}</span
      >
      <img src={`/assets/svg/${index}.svg`} style="height:50px;" alt="">
    </div>
  </div>

  <div class="mt-5">
    <span class="d-block mb-2" style="font-size: 32px;">
      Gelecek Günlerin Renkleri
    </span>
    <IncomingColors backgroundColor={backgroundColor} textColor={textColor}/>
  </div>
</div>
