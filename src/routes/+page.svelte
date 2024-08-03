<script>
	import TypcnPlus from '~icons/typcn/plus';
    import IonSettingsSharp from '~icons/ion/settings-sharp';
</script>


<div role="alert" class="alert alert-info mt-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="h-6 w-6 shrink-0 stroke-current">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span>just testing stuff :) not ready yet</span>
  </div>




  <div class="container mx-auto w-60">


    <div class="flex flex-row justify-center mt-5">
        <img src="/donk.png" alt="donk.chat">
      </div>
    
      <div class="flex flex-row justify-center">
        <article class="prose m-5">
            <h1>donk.chat</h1>
          </article> 
      </div>
    
      <div class="flex flex-row justify-center tooltip tooltip-error" data-tip="not working yet :)">
        <button class="btn btn-primary text-xl font-bold"><TypcnPlus />New chat room</button>
      </div>

      <div class="flex flex-row justify-center p-3">

        <div class="collapse bg-base-200">
            <input type="checkbox" />
            <div class="collapse-title text-lg inline-flex items-center justify-center"><IonSettingsSharp/>Settings</div>                
            <div class="collapse-content">
              
                <div class="form-control">
                    <label class="label cursor-pointer">
                      <span class="label-text">Something</span>
                      <input type="checkbox" checked class="checkbox" />
                    </label>
                  </div>

                  <div class="divider"></div>

                  <div class="form-control">
                    <label class="label cursor-pointer">
                      <span class="label-text">dank</span>
                      <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked />
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="label cursor-pointer">
                      <span class="label-text">donk</span>
                      <input type="radio" name="radio-10" class="radio checked:bg-blue-500" checked />
                    </label>
                  </div>

                  <div class="divider"></div>

                  <label class="form-control w-full max-w-xs">
                    <div class="label">
                      <span class="label-text">asd</span>
                    </div>
                    <select class="select select-bordered">
                      <option selected>dank</option>
                      <option>donk</option>
                    </select>
                  </label>

            </div>
          </div>

    </div>


</div>












