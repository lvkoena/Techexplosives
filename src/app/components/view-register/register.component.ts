import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
import { RegisterService } from 'src/app/services/register.service';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private registerService: RegisterService) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  private loadChartData(): void {
    this.registerService.getChartData()
      .subscribe(data => {
        this.initializeChart(data);
        this.initializePieChart(data);
      });
  }

  private initializeChart(data: { name: string, value: number, year: number }[]): void {
    const chartDom = document.getElementById('LineChart')!;
    const myChart = echarts.init(chartDom);

    const years = Array.from(new Set(data.map(item => item.year)));
    const platforms = Array.from(new Set(data.map(item => item.name)));

    const series = years.map(year => ({
      name: String(year),
      type: 'line',
      stack: 'Total',
      data: platforms.map(platform => {
        const item = data.find(d => d.name === platform && d.year === year);
        return item ? item.value : 0;
      })
    })) as EChartsOption['series'];

    const option: EChartsOption = {
      title: {
        text: 'Stacked Line'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: years.map(String)
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
        data: platforms
      },
      yAxis: {
        type: 'value'
      },
      series: series
    };

    option && myChart.setOption(option);
  }

  private initializePieChart(data: { name: string, value: number }[]): void {
    const chartDom = document.getElementById('pieChart')!;
    const myChart = echarts.init(chartDom);

    const option: EChartsOption = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Real Data',
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
          data: data.map(item => ({ value: item.value, name: item.name })),
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

    option && myChart.setOption(option);
  }
}
