import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { ChartData } from 'src/app/interface/ChartData';
import { RegisterService } from 'src/app/services/register.service';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  myChart: echarts.ECharts | undefined;

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    this.registerService.getChartData().subscribe((data: ChartData[]) => {
      const pieChartData = data.map(item => ({
        value: item.data[0], 
        name: item.name
      }));
      this.initializePieChart(pieChartData);
      this.lineChart();
    });
  }

  private lineChart(): void {
    const chartDom = document.getElementById('lineChart') as HTMLElement;
    this.myChart = echarts.init(chartDom);

    this.registerService.getChartData().subscribe(chartData => {
      if (this.myChart) { 
        const option: EChartsOption = {
          title: {
            text: 'Stacked Line'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: chartData.map(data => data.name) 
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['January', 'February', 'March', 'April', 'May', 'June', 'July'] 
          },
          yAxis: {
            type: 'value'
          },
          series: chartData.map(data => ({
            name: data.name,
            type: data.type,
            stack: data.stack,
            data: data.data
          }))
        };

        this.myChart.setOption(option);
      }
    });
  }

  private initializePieChart(data: { value: number; name: string; }[]): void {
    const chartDom = document.getElementById('pieChart')!;
    const myChart = echarts.init(chartDom);

    const seriesData = data.map(item => ({
      value: item.value,
      name: item.name
    }));

    const option: EChartsOption = {
      title: {
        text: 'Charts',
        subtext: 'Echarts Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: seriesData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    myChart.setOption(option);
  }
}
