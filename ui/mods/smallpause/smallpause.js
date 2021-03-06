console.log("setting small pause styles...");

$('body').css({
	'background-color': 'rgba(0,0,0,0)',
    'background-image': 'none',
    height : '100%',
    width: '100%',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    position: 'absolute'
});

$('.div_panel_bar_background').css({
    width: '260px',
    margin: '20px 0 0 -130px',
    position: 'absolute',
    top: '20px',
    left: '50%',
    'box-shadow': '0px 0px 100px #000',
    'text-align': 'center',
    'background-color': 'rgba(0,0,0,.5)'
});

$('.div_panel_primary_msg').css({
	height: '30px',
    'line-height': '15px',
    width: '100%',
    background: 'url(coui://ui/main/game/game_over/img/bground_summary.png) center center no-repeat rgba(0,0,0,.7)',
    'font-family': 'Sansation Bold',
    'font-size': '20px',
    color: '#fff',
    border: '1px solid rgba(255,255,255,.15)',
    'border-width': '1px 0px',
    'text-shadow': '0px 0px 25px rgba(0, 0, 0, 1)',
    'box-shadow': '0px 0px 50px #000',
    padding: '8px 0px 0px 0px'
});

$('.div_options_bar').css({
    width: '100%',
    background: 'rgba(0,0,0,.6)',
    display: 'flex',
    'flex-direction': 'row',
    'align-content': 'center',
    'justify-content': 'center',
    padding: '0px 0px',
});

$('input[type="button"]').css({
    'font-size': '18px',
    padding: '4px 36px',
    'box-shadow': '0px 0px 20px #000'
});

$('.div_bottom_margin_bar').css({
    height: '5px',
    width: '100%',
    background: 'rgba(0,0,0,.3)',
});