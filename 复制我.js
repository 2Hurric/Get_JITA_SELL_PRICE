function get_jita_sell(type_id) {
  var station_id=60003760;
  //type_id=34;
  var url='https://esi.tech.ccp.is/latest/markets/10000002/orders/?datasource=tranquility&order_type=sell&type_id='+type_id;
  var parameters = {method : "get"};
  var jsonFeed = UrlFetchApp.fetch(url, parameters).getContentText();
  var json = JSON.parse(jsonFeed);
  var prices=[];
  var pr=100000000000;
  prices.push(['order_id','type_id','location_id','volume_total','volume_remain','min_volume','price','is_buy_orde','duration','issued','range'])
  if(json) {
    for(i in json) {
      if (json[i].location_id==station_id){
        if (json[i].price<pr){
          pr=json[i].price;
        }
      }
     }
  }
  return pr;
  
}