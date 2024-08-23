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
      this.initializeChart(data);
    });
  }

  private initializeChart(data: { name: string, value: number }[]): void {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);
    const option: EChartsOption = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Real Data from MongoDB',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    option && myChart.setOption(option);
  }
}
