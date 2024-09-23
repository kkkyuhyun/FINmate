<template>
    <div class="wrap">
        <div class="container">
            <div class="item cal">
                <div>sns</div>
            </div>
            <div class="item group">
                <div>모임1</div>
                <div>모임2</div>
            </div>
            <div class="item sns">
                <div>sns</div>
                <div>sns</div>
                <div>sns</div>
                <div>sns</div>
            </div>
        </div>  
    </div>
</template>

<style scoped>
.container {
    width: 1400px;
    margin: auto;
    margin-top: 100px;
	display: grid;
    row-gap: 10px;
	column-gap: 10px;
    text-align: center;
}
.item {
    margin: 7px;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgb(180, 180, 180);
    display: flex;
    justify-content: center;
    align-items: center;
}
.item:nth-child(1) {
	grid-column: 1 / span 2;
    height: 500px;
    
}
.item:nth-child(2) { 
    grid-column: 1 /span 1;
    height: 300px;
    justify-content: space-between;
}

.item:nth-child(3) { 
    grid-column: 2 /span 1;
    height: 300px;
    flex-direction: column;
}
.cal div {
    width: 100%;
    height: 100%;
    background-color: var(--btn-blue);
}

.group div{
    margin-right: 10px;
    width: 100%;
    height: 100%;
    background-color: var(--btn-blue);
}
.group div:last-child{
    margin-right: 0px;
}

.sns div {
    margin-bottom: 10px;
    width: 100%;
    height: 30%;
    background-color: var(--btn-blue);
}

.sns div:last-child {
    margin-bottom: 0px;
}

</style>
