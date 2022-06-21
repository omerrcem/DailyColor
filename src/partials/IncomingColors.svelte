<script>
  import {calculateDayColor, getDateArray, getTextColorByBackgroundColor} from '../utils/Helpers';
  import {Colors, ColorToHex, Days} from '../utils/Constants';
  const dates = getDateArray();
  console.log(dates);
</script>

<div class="m-t-4">
  {#each dates as date}
    <div
      class={`d-inline-block rounded text-center p-2 mr-2 ${calculateDayColor(date) === Colors.WHITE && 'border'}`}
      style={`background-color:${
        ColorToHex[calculateDayColor(date)]
      }; color:${getTextColorByBackgroundColor(calculateDayColor(date))}; width: 50px;`}
    >
      {Days[(date.getDay() + 6) % 7]}
    </div>
  {/each}
</div>
