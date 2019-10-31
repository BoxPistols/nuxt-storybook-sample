<template>
    <div class="org_btn">
        <div class="mol_btn">
            <button class="atm_btn">Button</button>
        </div>
        <div class="mol_btn">
            <button class="atm_btn cl_access">Button</button>
        </div>
        <div class="mol_btn">
            <button class="atm_btn cl_info">Button</button>
        </div>
        <div class="mol_btn">
            <button class="atm_btn cl_warning">Button</button>
        </div>
        <div class="mol_btn">
            <button class="atm_btn cl_danger">Button</button>
        </div>
    </div>
</template>

<style>
.org_btn {
    display: flex;
}
.mol_btn {
    margin: 0 0.5rem;
}
.atm_btn {
    padding: 0 1.25rem;
    line-height: 2.5rem;
    font-size: 1.25rem;
    border: 1px solid #999;
    border-bottom-width: .15rem;
    border-radius: 0.25rem;
   transition: .2s;
}
.atm_btn:hover {
  cursor: pointer;
  background-color: aliceblue;
  border-bottom-width: 1px;
}
.cl_access {
    color: teal;
    border-color: teal;
}
.cl_info {
    color: dodgerblue;
    border-color: dodgerblue;
}
.cl_warning{
    color: darkorange;
    border-color: darkorange;
}
.cl_danger{
    color: crimson;
    border-color: crimson;
}
</style>
