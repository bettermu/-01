;(function($,win,doc,echarts){

	var tid;

	var docEl=doc.documentElement;

	var arrayWeek=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

	var i=10;

	

	var chart={
		
		waterTotalObj:null,
		waterMonthObj:null,
		waterDayObj:null,
		procurerObj:null,
		providerObj:null,
		hotSpotObj:null,
		passengerObj:null,
		sourceObj:null,
		ageObj:null,


		//图表事件绑定
		bindEvent:function(){
			chart.hotSpotObj.on("click",function(param){
				//console.log(param);
				daoData.getHotSpotData(param);
			})
		},

		resize:function(){
			
			chart.waterTotalObj.resize();
			chart.waterMonthObj.resize();
			chart.waterDayObj.resize();
			chart.procurerObj.resize();
			chart.providerObj.resize();
			chart.hotSpotObj.resize();
			chart.passengerObj.resize();
			chart.sourceObj.resize();
			chart.ageObj.resize();
		},
		init:function(){
			
			chart.waterTotalObj=echarts.init(document.getElementById('total'));
			chart.waterMonthObj=echarts.init(document.getElementById('month'));
			chart.waterDayObj=echarts.init(document.getElementById('day'));
			chart.procurerObj=echarts.init(document.getElementById('procurer'));
			chart.providerObj=echarts.init(document.getElementById('provider'));
			chart.hotSpotObj=echarts.init(document.getElementById('hotSpot'));
			chart.passengerObj=echarts.init(document.getElementById('passenger'));
			chart.sourceObj=echarts.init(document.getElementById('source'));
			chart.ageObj=echarts.init(document.getElementById('age'));

			chart.setOption();

			chart.bindEvent();
		},
		setOption:function(TWaterData,MWaterData,DWaterData,payLegendData,paySeriesData,gsyLegendData,gsySeriesData,sexManObj,sexWomanObj,ageLegendData,ageSeriesData){
			
			chart.waterTotalObj.setOption({
				title: {
       					text: '总交易额',
       					x:'center',
       					textStyle:{
       						color:'#fff'
       					},
       					left:'5%',
       					top:'5%'
       				},
       				color:['#ffef9c','#19ea80','#1876b2'],
       				tooltip:{
       					trigger: 'item',
                    				formatter: "{a} <br/>{b} : {c} ({d}%)"
       				},
       				legend:{
       					orient:'vertical',
       					left:'5%',
       					bottom:'bottom',
       					data:['钱包','授信','现付'],
       					textStyle:{
       						color:'#fff',
       						fontSize:'14'
       					},
       					itemWidth:12,
       					itemHeight:12,
       					itemGap:15,
       					bottom:'10%'
       				},
       				series:[{
       					type:'pie',
       					radius:'80%',
       					
       					center:['70%','50%'],
       					label:{
       						normal:{
       							show:true,
       							position:'inside',
       							formatter:function(obj){
       								return obj.percent.toFixed(0)+'%';
       							}
       						}
       					},
       					labelLine:{
       						normal:{
       							show:false
       						}
       					},
       					data:TWaterData||[]
       				}],
       				itemStyle: {
                            			emphasis: {
                                			shadowBlur: 10,
                                			shadowOffsetX: 0,
                                			shadowColor: 'rgba(0, 0, 0, 0.5)'
                            		}
                        }

			});
			chart.waterMonthObj.setOption({
				title: {
       					text: '月交易额',
       					x:'center',
       					textStyle:{
       						color:'#fff'
       					},
       					left:'5%',
       					top:'5%'
       				},
       				color:['#ffef9c','#19ea80','#1876b2'],
       				tooltip:{
       					trigger: 'item',
                    				formatter: "{a} <br/>{b} : {c} ({d}%)"
       				},
       				legend:{
       					orient:'vertical',
       					left:'5%',
       					bottom:'bottom',
       					data:['钱包','授信','现付'],
       					textStyle:{
       						color:'#fff',
       						fontSize:'14'
       					},
       					itemWidth:12,
       					itemHeight:12,
       					itemGap:15,
       					bottom:'10%'
       				},
       				series:[{
       					type:'pie',
       					radius:'80%',
       					
       					center:['70%','50%'],
       					label:{
       						normal:{
       							show:true,
       							position:'inside',
       							formatter:function(obj){
       								//console.log(obj);
       								return obj.percent.toFixed(0)+'%';
       							}
       						}
       					},
       					labelLine:{
       						normal:{
       							show:false
       						}
       					},
       					data:MWaterData||[]
       				}],
       				itemStyle: {
                            			emphasis: {
                                			shadowBlur: 10,
                                			shadowOffsetX: 0,
                                			shadowColor: 'rgba(0, 0, 0, 0.5)'
                            		}
                        }

			});
			chart.waterDayObj.setOption({
				title: {
       					text: '日交易额',
       					x:'center',
       					textStyle:{
       						color:'#fff'
       					},
       					left:'5%',
       					top:'5%'
       				},
       				color:['#ffef9c','#19ea80','#1876b2'],
       				tooltip:{
       					trigger: 'item',
                    				formatter: "{a} <br/>{b} : {c} ({d}%)"
       				},
       				legend:{
       					orient:'vertical',
       					left:'5%',
       					bottom:'bottom',
       					data:['钱包','授信','现付'],
       					textStyle:{
       						color:'#fff',
       						fontSize:'14'
       					},
       					itemWidth:12,
       					itemHeight:12,
       					itemGap:15,
       					bottom:'10%'
       				},
       				series:[{
       					type:'pie',
       					radius:'80%',
       					
       					center:['70%','50%'],
       					label:{
       						normal:{
       							show:true,
       							position:'inside',
       							formatter:function(obj){
       								return obj.percent.toFixed(0)+'%';
       							}
       						}
       					},
       					labelLine:{
       						normal:{
       							show:false
       						}
       					},
       					data:DWaterData||[]
       				}],
       				itemStyle: {
                            			emphasis: {
                                			shadowBlur: 10,
                                			shadowOffsetX: 0,
                                			shadowColor: 'rgba(0, 0, 0, 0.5)'
                            		}
                        }

			});
			chart.procurerObj.setOption({
				
				grid: {
        					left: '5%',
        					right: '10%',
        					bottom: '3%',
        					top:'3%',
        					containLabel: true
    				},
    				color:['#b6e3fa'],
    				max:2500,

				xAxis:{
					type:'value',
					axisLabel:{
						textStyle:{
							color:'#fff'
						}
					},
					axisLine:{
						show:false,
					}
				},
				yAxis:{
					type:'category',
					data:paySeriesData||[],
					axisLabel:{
						textStyle:{
							color:'#fff',
							align:'right'
						},	
					},
					axisLine:{
						show:true,
						lineStyle:{
							color:'#fff'
						}
					},
					axisTick:{
						show:false
					}
				},
				series:[{
					type:'bar',
					data:payLegendData||[]
				}]
			});
			chart.providerObj.setOption({
				
				grid: {
        					left: '5%',
        					right: '10%',
        					bottom: '3%',
        					top:'3%',
        					containLabel: true
    				},
    				color:['#b6e3fa'],

				xAxis:{
					type:'value',
					axisLabel:{
						textStyle:{
							color:'#fff'
						}
					},
					axisLine:{
						show:false
					},
					
					splitNumber:3,
					axisTick:{
						show:false
					}
				},
				yAxis:{
					type:'category',
					data:gsySeriesData||[],
					axisLabel:{
						textStyle:{
							color:'#fff',
							align:'right'
						},

					},
					axisLine:{
						show:true,
						lineStyle:{
							color:'#fff'
						}
					},
					axisTick:{
						show:false
					}
				},
				series:[{
					type:'bar',
					data:gsyLegendData||[]
				}],

			});
			chart.hotSpotObj.setOption({
				title:{
					text:'',

				},
				tooltip:{
					show:false,
					trigger:'item'
				},
				series:[{
					type:'map',
					map:'huangshan',
					label:{
						normal:{
							show:false,
							textStyle:{
								color:'#fff'
							}
						},
						emphasis:{
							show:false
						}
					},
					top:'25%',
					left:'5%',
					right:'5%',
					bottom:'5%',
					itemStyle:{
						normal:{
							areaColor:'transparent',
							borderColor:'#49b3e7',
							borderWidth:2,
							shadowColor:'#49b3e7',
							shadowBlur:20,
							shadowOffsetX:0,
							shadowOffsetY:0
						},
						emphasis:{
							areaColor:'#1eff01'
						}
					}
					
				}]
			});
			chart.passengerObj.setOption({
				tooltip:{
					show:false,
					trigger:'item'
				},
				series:[{
					type:'map',
					map:'china',
					label:{
						normal:{
							show:false
						},
						emphasis:{
							show:false
						}
					},
					top:'5%',
					left:'5%',
					right:'5%',
					bottom:'5%',
					itemStyle:{
						normal:{
							areaColor:'transparent',
							borderColor:'#49b3e7',
							borderWidth:2,
							shadowColor:'#49b3e7',
							
							
						},
						emphasis:{
							areaColor:'#1eff01'
						}
					}
				}]

			});
			chart.sourceObj.setOption({
				legend:{
					orient:'vertical',
					right:'2%',
					data:[{
						name:'女性',
						textStyle:{
							color:'#fff'
						}
					},{
						name:'男性',
						textStyle:{
							color:'#fff'
						}
					}
					],
					textStyle:{
       						color:'#fff',
       						
       					},
       					itemWidth:12,
       					itemHeight:12,
       					itemGap:15,
       					bottom:'10%'
				},
				grid: {
        					left:'-5%',
        					right: '20%',
        					bottom: '5%',
        					top:'3%',
        					containLabel: true
    				},
				xAxis:{
					type:'value',
					axisLabel:{
						textStyle:{
							color:'#fff'
						}
					},
					splitNumber:10,
					name:'%',
					nameLocation:'end',
					nameTextStyle:{
						color:'#fff'
					},
					max:100,
					axisLine:{
						show:true,
						lineStyle:{
							color:'#fff'
						}
					},
					splitLine:{
						show:false
					}
				},
				color:['#1876b3','#ffee9c'],
				yAxis:{
					type:'category',
					data:[],
					axisLine:{
						show:true,
						lineStyle:{
							color:'#fff'
						}
					},

				},
				series:[{
					name:'女性',
					type:'bar',
					data:sexWomanObj||[],
					label:{
						normal:{
							show:true,
							position:'right',
							formatter:function(obj){
								
								return obj.value+'%';
							},
							textStyle:{
								color:'#b6e3fa'
							}
						}
					}
				},{
					name:'男性',
					type:'bar',
					data:sexManObj||[],
					label:{
						normal:{
							show:true,
							position:'right',
							formatter:function(obj){
								return obj.value+'%';
							},
							textStyle:{
								color:'#b6e3fa'
							}
							}
						}
				}]
			});
			chart.ageObj.setOption({
				
				grid: {
        					left: '5%',
        					right: '10%',
        					bottom: '3%',
        					top:'3%',
        					containLabel: true
    				},
    				color:['#b6e3fa'],

				xAxis:{
					type:'value',
					axisLine:{
						show:false
					},
					axisLabel:{
						textStyle:{
							color:'#fff'
						},
						formatter:function(obj){
							return obj.toFixed(2)+'%';
						}

					},

				},
				yAxis:{
					type:'category',
					data:ageLegendData||[],
					axisLabel:{
						textStyle:{
							color:'#fff',
							align:'right'
						},
						margin:40

					}
				},
				series:[{
					type:'bar',
					data:ageSeriesData||[]
				}]
			});

		}
	}


	//根据字号调整

	function refreshRem(){
		var width=docEl.getBoundingClientRect().width;
		var rem=width/10;
		docEl.style.fontSize=rem+"px";
	}


	//倒计时
	function setTime(){
		
		i--;
		if(i==0){
			i=10;
		}
		$('.setTime').html(i);

	}

	//时间计算
	function time(){
		var date=new Date();
		var year=date.getFullYear();
		var month=date.getMonth()+1;
		var day=date.getDate();
		var week=date.getDay();

		var time = year+"."+month+"."+day;
		var weekInfo=arrayWeek[week];

		$('#time').html(time);
		$('#week').html(weekInfo);
		//console.log(i);
	}

	//后端接口
	var dao={
		//获取交易额
		getDeal:function(param,successCb,failCb){
			$.ajax({
				url:"http://www.op01.com/Visualization/GetBaseData",
				type:"post",
				dataType:"json",
				data:param,
				success:function(data,textStatus,jqXHR){
					successCb&&successCb(data,textStatus,jqXHR);
				},
				error:function (jqXHR, textStatus, errorThrown) {
                    				console.log();
                    				failCb && failCb(jqXHR, textStatus, errorThrown);
                			}
			})
		}
	}

	//模板
	var tmpl={
		dealTmpl:doT.template($('#dealTmpl').text()),
		hotSpotTmpl:doT.template($('#hotSpotTmpl').text()),
		peopleTmpl:doT.template($('#peopleTmpl').text())
	}

	//工具类
	var tool={
		//数组转换
		getArr:function(data,sub){
			//console.log(data.data);
			var keys=Object.keys(data[sub]);
			var arr=[];
			var legendArr=[];
			var seriesArr=[];
			$.each(keys,function(index,value){
				arr.push({
					text:value,
					value:data[sub][value]
				})
				legendArr.push(value);
				seriesArr.push(data[sub][value]);
			});
			data.arr=arr;
			data.legendArr=legendArr;
			data.seriesArr=seriesArr;
		}
	}

	//数据层
	var daoData={

		//流水情况
		TWaterData:[],
		MWaterData:[],
		DWaterData:[],
		//采购商
		payLegendData:[],
		paySeriesData:[],

		//供应商
		gsyLegendData:[],
		gsySeriesData:[],

		//性别
		sexManObj:[],
		sexWomanObj:[],

		//年龄段
		ageLegendData:[],
		ageSeriesData:[],

		init:function(){

			this.getDealData();
			this.getWaterData();
			this.getPaymemberData();
			this.getGysmemberData();
			//初始展示屯溪区
			this.getHotSpotData({name:"屯溪区"});
			this.getPeopleData();
			this.getSexData();
			this.getAgeData();
			this.setOption();
		},

		setOption:function(){
			chart.setOption(this.TWaterData,this.MWaterData,this.DWaterData,this.payLegendData,this.paySeriesData,this.gsyLegendData,this.gsySeriesData,this.sexManObj,this.sexWomanObj,this.ageLegendData,this.ageSeriesData);
		},

		//交易额渲染
		getDealData:function(){
			var data={"Totalturnover":{"Totalamount":"654371232","An":"-0.01","Walletproportion":"0.15","CreditProportion":"0.35","cashProportion":"0.5"},"Monthturnover":{"Totalamount":"654371232","An":"0.02","Walletproportion":"0.35","CreditProportion":"0.15","cashProportion":"0.5"},"Weekturnover":{"Totalamount":"654371232","An":"0.20","Walletproportion":"0.1","CreditProportion":"0.89","cashProportion":"0.01"},"Dayturnover":{"Totalamount":"654371232","An":"-0.07","Walletproportion":"0.35","CreditProportion":"0.5","cashProportion":"0.15"}};
			//console.log(data.Totalturnover.An);

			$('#deal').html(tmpl.dealTmpl(data));
		},
		//流水情况渲染
		getWaterData:function(){
			var data={"Totalturnover":{"Totalamount":"654371232","An":"-0.01","Walletproportion":"0.15","CreditProportion":"0.35","cashProportion":"0.5"},"Monthturnover":{"Totalamount":"654371232","An":"0.02","Walletproportion":"0.35","CreditProportion":"0.15","cashProportion":"0.5"},"Weekturnover":{"Totalamount":"654371232","An":"0.20","Walletproportion":"0.1","CreditProportion":"0.89","cashProportion":"0.01"},"Dayturnover":{"Totalamount":"654371232","An":"-0.07","Walletproportion":"0.35","CreditProportion":"0.5","cashProportion":"0.15"}};
			var map={
				"Walletproportion":"钱包",
				"CreditProportion":"授信",
				"cashProportion":"现付",
			}
			this.TWaterData.push({value:data.Totalturnover.Walletproportion,name:map["Walletproportion"]});
			this.TWaterData.push({value:data.Totalturnover.CreditProportion,name:map["CreditProportion"]});
			this.TWaterData.push({value:data.Totalturnover.cashProportion,name:map["cashProportion"]});

			this.MWaterData.push({value:data.Monthturnover.Walletproportion,name:map["Walletproportion"]});
			this.MWaterData.push({value:data.Monthturnover.CreditProportion,name:map["CreditProportion"]});
			this.MWaterData.push({value:data.Monthturnover.cashProportion,name:map["cashProportion"]});

			this.DWaterData.push({value:data.Dayturnover.Walletproportion,name:map["Walletproportion"]});
			this.DWaterData.push({value:data.Dayturnover.CreditProportion,name:map["CreditProportion"]});
			this.DWaterData.push({value:data.Dayturnover.cashProportion,name:map["cashProportion"]});
		},

		//采购商渲染
		getPaymemberData:function(){
			var data={"paymember":[{"title":"\u643a\u7a0b\u7f51","Total":120},{"title":"\u540c\u7a0b\u7f51","Total":110},{"title":"\u9a74\u5988\u5988\u7f51","Total":100},{"title":"\u53bb\u54ea\u513f\u7f51","Total":90},{"title":"\u7f8e\u56e2\u7f51","Total":80},{"title":"\u9ec4\u5c71\u7231\u9014\u56fd\u65c5","Total":70},{"title":"\u9ec4\u5c71\u4e2d\u65c5","Total":60},{"title":"\u9ec4\u5c71\u9752\u5e74\u56fd\u9645\u65c5\u884c\u793e","Total":50},{"title":"\u9ec4\u5c71\u4e2d\u6d77\u56fd\u9645\u65c5\u884c\u793e","Total":40},{"title":"\u9ec4\u5c71\u4e2d\u6d77\u56fd\u9645\u65c5\u884c\u793e","Total":30}],"gysmember":[{"title":"\u9ec4\u5c71\u98ce\u666f\u533a","Total":200},{"title":"\u7fe1\u7fe0\u8c37\u666f\u533a","Total":180},{"title":"\u5b8f\u6751\u666f\u533a","Total":175},{"title":"\u897f\u9012\u666f\u533a","Total":150},{"title":"\u9f50\u4e91\u5c71","Total":120},{"title":"\u724c\u574a\u7fa4\u666f\u533a","Total":110},{"title":"\u9189\u6e29\u6cc9\u666f\u533a","Total":110},{"title":"\u4e5d\u9f99\u7011","Total":100},{"title":"\u6728\u5751\u7af9\u6d77","Total":60},{"title":"\u6843\u82b1\u6e90\u6f02\u6d41","Total":20}]}
			
			$.each(data.paymember,function(index,value){

				daoData.payLegendData.push(value.Total);
				daoData.paySeriesData.push(value.title);
			});
			daoData.payLegendData.reverse();
			daoData.paySeriesData.reverse();			
		},

		//供应商渲染
		getGysmemberData:function(){
			var data={"paymember":[{"title":"\u643a\u7a0b\u7f51","Total":120},{"title":"\u540c\u7a0b\u7f51","Total":110},{"title":"\u9a74\u5988\u5988\u7f51","Total":100},{"title":"\u53bb\u54ea\u513f\u7f51","Total":90},{"title":"\u7f8e\u56e2\u7f51","Total":80},{"title":"\u9ec4\u5c71\u7231\u9014\u56fd\u65c5","Total":70},{"title":"\u9ec4\u5c71\u4e2d\u65c5","Total":60},{"title":"\u9ec4\u5c71\u9752\u5e74\u56fd\u9645\u65c5\u884c\u793e","Total":50},{"title":"\u9ec4\u5c71\u4e2d\u6d77\u56fd\u9645\u65c5\u884c\u793e","Total":40},{"title":"\u9ec4\u5c71\u4e2d\u6d77\u56fd\u9645\u65c5\u884c\u793e","Total":30}],"gysmember":[{"title":"\u9ec4\u5c71\u98ce\u666f\u533a","Total":200},{"title":"\u7fe1\u7fe0\u8c37\u666f\u533a","Total":180},{"title":"\u5b8f\u6751\u666f\u533a","Total":175},{"title":"\u897f\u9012\u666f\u533a","Total":150},{"title":"\u9f50\u4e91\u5c71","Total":120},{"title":"\u724c\u574a\u7fa4\u666f\u533a","Total":110},{"title":"\u9189\u6e29\u6cc9\u666f\u533a","Total":110},{"title":"\u4e5d\u9f99\u7011","Total":100},{"title":"\u6728\u5751\u7af9\u6d77","Total":60},{"title":"\u6843\u82b1\u6e90\u6f02\u6d41","Total":20}]}
			
			$.each(data.gysmember,function(index,value){
				daoData.gsyLegendData.push(value.Total);
				daoData.gsySeriesData.push(value.title);
			})

			daoData.gsyLegendData.reverse();
			daoData.gsySeriesData.reverse();			
		},

		//景区热点分布渲染
		getHotSpotData:function(param){
			var data=[{"title":"\u9ec4\u5c71\u533a\u666f\u533a\u9884\u5b9a\u60c5\u51b5","data":{"\u897f\u9012":"220","\u5b8f\u6751":"200","\u666f\u533aA":"110","\u666f\u533aB":"100","\u666f\u533aC":"70"}},{"title":"\u5c6f\u6eaa\u533a\u666f\u533a\u9884\u5b9a\u60c5\u51b5","data":{"\u897f\u9012":"250","\u5b8f\u6751":"170","\u666f\u533aA":"340","\u666f\u533aB":"780","\u666f\u533aC":"45"}},{"title":"\u5fbd\u5dde\u533a\u666f\u533a\u9884\u5b9a\u60c5\u51b5","data":{"\u897f\u9012":"455","\u5b8f\u6751":"656","\u666f\u533aA":"432","\u666f\u533aB":"986","\u666f\u533aC":"700"}},{"title":"\u6b59\u53bf\u666f\u533a\u9884\u5b9a\u60c5\u51b5","data":{"\u897f\u9012":"660","\u5b8f\u6751":"270","\u666f\u533aA":"117","\u666f\u533aB":"156","\u666f\u533aC":"787"}},{"title":"\u9edf\u53bf\u666f\u533a\u9884\u5b9a\u60c5\u51b5","data":{"\u897f\u9012":"535","\u5b8f\u6751":"243","\u666f\u533aA":"132","\u666f\u533aB":"645","\u666f\u533aC":"245"}},{"title":"\u7941\u95e8\u53bf\u666f\u533a\u9884\u5b9a\u60c5\u51b5","data":{"\u897f\u9012":"665","\u5b8f\u6751":"345","\u666f\u533aA":"867","\u666f\u533aB":"131","\u666f\u533aC":"213"}},{"title":"\u4f11\u5b81\u53bf\u666f\u533a\u9884\u5b9a\u60c5\u51b5","data":{"\u897f\u9012":"367","\u5b8f\u6751":"897","\u666f\u533aA":"356","\u666f\u533aB":"432","\u666f\u533aC":"246"}}]
			var map={
				"黄山区":1,
				"屯溪区":2,
				"徽州区":3,
				"歙县":4,
				"黟县":5,
				"祁门县":6,
				"休宁县":7,
			};
			var iData=data[map[param.name]-1];
			tool.getArr(iData,"data");
			$('#message').html(tmpl.hotSpotTmpl(iData));
			//console.log(data[map[param.name]-1]);
		},

		//客源分布渲染
		getPeopleData:function(){
			var data={"Top6":[{"title":"\u5b89\u5fbd\u7701","Total":43271},{"title":"\u6d59\u6c5f\u7701","Total":32091},{"title":"\u6c5f\u82cf\u7701","Total":27891},{"title":"\u4e0a\u6d77","Total":21762},{"title":"\u6c5f\u897f","Total":15432},{"title":"\u5317\u4eac","Total":8765}]};
			
			$('#people').html(tmpl.peopleTmpl({arr:data.Top6}));
		},

		//客户来源性别分布渲染
		getSexData:function(){
			var data={"SEX":{"man":"0.761","woman":"0.239"},"age":{"20\u5c81\u4ee5\u4e0b":"0.12","20-30\u5c81":"0.32","30-40":"0.22","40-50":"0.18","50-60":"0.11","60\u4ee5\u4e0a":"0.5"}}
			
			
			//console.log(data.SEX.man*100);
			daoData.sexManObj.push(parseFloat(data.SEX.man*100));
			daoData.sexWomanObj.push(parseFloat(data.SEX.woman*100));
			
			//console.log(daoData.sexManObj);
		},
		//客户年龄层次渲染
		getAgeData:function(){
			var data={"SEX":{"man":"0.761","woman":"0.239"},"age":{"20\u5c81\u4ee5\u4e0b":"0.12","20-30\u5c81":"0.32","30-40":"0.22","40-50":"0.18","50-60":"0.11","60\u4ee5\u4e0a":"0.5"}}
			tool.getArr(data,"age");
			
			$.each(data.legendArr,function(index,value){
				daoData.ageLegendData.push(value);
			});
			$.each(data.seriesArr,function(index,value){
				var intValue=value*100;
				daoData.ageSeriesData.push(intValue);
			});
		}
	}

	//轮播图实现
	function swiper(){
		var mySwiper = new Swiper ('.swiper-container', {
    			direction: 'horizontal',
    			loop: false,
    			autoplay:5000,
    			autoplayDisableOnInteraction : false
  		}) 

	}


	var handler={

		//事件绑定
		bindEvent:function(){

			win.addEventListener("resize",function(){
				clearTimeout(tid);
				tid=setTimeout(function(){
					refreshRem();
					chart.resize();

				},300);
			},false);	
		},

		//定时获取数据置空
		setNull:function(){
			daoData.TWaterData=[];
			daoData.MWaterData=[];
			daoData.DWaterData=[];
			daoData.payLegendData=[];
			daoData.paySeriesData=[];
			daoData.gsyLegendData=[];
			daoData.gsySeriesData=[];
			daoData.sexManObj=[];
			daoData.sexWomanObj=[];
			daoData.ageLegendData=[];
			daoData.ageSeriesData=[];
		},

		init:function(){
			//初始化
			$('.setTime').html(i);
			refreshRem();
			time();
			

			setInterval(setTime,1000);
			chart.init();
			
			handler.bindEvent();
			daoData.init();

			setInterval(function(){
				time();
				handler.setNull();

				chart.init();
				daoData.init();
				num();
			},10000);
		}

	}

	//数字动态效果

	function num(){
		
		$("#totalV").numberAnimate({num:parseInt($("#totalV").html()), speed:2000});
		$("#monthV").numberAnimate({num:parseInt($("#monthV").html()), speed:2000});
		$("#weekV").numberAnimate({num:parseInt($("#weekV").html()), speed:2000});
		$("#dayV").numberAnimate({num:parseInt($("#dayV").html()), speed:2000});

		/*$("#Tper").numberAnimate({num:parseInt($("#Tper").text()), pst:"%", speed:2000});
		$("#Mper").numberAnimate({num:parseInt($("#Mper").text()), pst:"%", speed:2000});
		$("#Wper").numberAnimate({num:parseInt($("#Wper").text()), pst:"%", speed:2000});
		$("#Dper").numberAnimate({num:parseInt($("#Dper").text()), pst:"%", speed:2000});*/
	}

	//入口函数
	$(function(){

		handler.init();
		swiper();
		num();
	})

})(jQuery,window,document,echarts)