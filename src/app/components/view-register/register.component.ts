import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    this.registerService.getChartData().subscribe(data => {
      this.initializeBarChart(data);
      this.initializeStackedLineChart();
    });
  }

  private initializeBarChart(data: { name: string, value: number, year: number }[]): void {
    const chartDom = document.getElementById('barChart')!;
    const myChart = echarts.init(chartDom);

    const platforms = Array.from(new Set(data.map(item => item.name)));
    const years = Array.from(new Set(data.map(item => item.year)));

    const series: echarts.SeriesOption[] = years.map(year => ({
      name: String(year),
      type: 'bar',
      data: platforms.map(platform => {
        const item = data.find(d => d.name === platform && d.year === year);
        return item ? item.value : 0;
      })
    }));

    const option: EChartsOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
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
      xAxis: {
        type: 'category',
        data: platforms,
        axisLabel: {
          rotate: 45,
          interval: 0
        }
      },
      yAxis: {
        type: 'value'
      },
      series: series
    };

    option && myChart.setOption(option);
  }

  private initializeStackedLineChart(): void {
    const chartDom = document.getElementById('lineChart')!;
    const myChart = echarts.init(chartDom);

    const option: EChartsOption = {
      title: {
        text: 'Stacked Line'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
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
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    option && myChart.setOption(option);
  }
}
