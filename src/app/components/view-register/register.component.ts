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
    });
  }

  private initializeBarChart(data: { name: string, value: number, year: number }[]): void {
    const chartDom = document.getElementById('barChart')!;
    const myChart = echarts.init(chartDom);

    const platforms = Array.from(new Set(data.map(item => item.name)));
    const years = Array.from(new Set(data.map(item => item.year)));

    const series: echarts.SeriesOption[] = platforms.map(platform => ({
      name: platform,
      type: 'bar',
      data: years.map(year => {
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
        data: platforms
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: platforms
      },
      series: series
    };

    option && myChart.setOption(option);
  }
}
