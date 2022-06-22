<script>
  import {calculateDayColor, getDateArray, getTextColorByBackgroundColor, getStringDate } from '../utils/Helpers';
  import {Colors, ColorToHex, Days} from '../utils/Constants';
  export let backgroundColor;
  export let textColor;
  const dates = getDateArray();
  const today = new Date();
</script>

<div style={`background-color: ${textColor}; width: fit-content`} class="m-t-4 rounded p-4 col-12-md">
  {#each dates as date}
    <div class="mt-2">

      <div
      class={`d-inline-block rounded text-center p-2 mr-2 ${calculateDayColor(date) === Colors.WHITE && 'border'}`}
      style={`background-color:${
        ColorToHex[calculateDayColor(date)]
      }; color:${getTextColorByBackgroundColor(calculateDayColor(date))}; width: 50px;`}
      >
      {Days[(date.getDay() + 6) % 7]}
    </div>
    <span style={`color: ${backgroundColor}`} class:font-weight-bold={today.getDate() === date.getDate()} >{today.getDate() === date.getDate() ? 'Bugün' : getStringDate(date)}</span>

    
  </div>
  {/each}
</div>
