import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {axiosCoinHistory} from "../api/api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart() {
  const {coinId} = useParams();
  const {isLoading, data} = useQuery<IHistorical[]>(['ohlcv', coinId], () => axiosCoinHistory(coinId!))
  return (
      <div>
        {isLoading ? "Loading chart..." :
            (
                <ApexChart
                    type='line'
                    series={[
                      {
                        name: "Price",
                        data:data?.map((price) => price.close) as number[],
                      },
                    ]}
                    options={{
                      theme:{
                        mode:'dark'
                      },
                      chart:{
                        height:500,
                        width:500,
                        background:'transparant',
                        toolbar:{
                          show:false,
                        }
                      },
                      grid:{
                        show:false
                      },
                      stroke:{
                        curve:'smooth',
                        width:4,
                      },
                      yaxis:{
                        show:false
                      },
                      xaxis:{
                        axisBorder:{
                          show:false
                        },
                        axisTicks:{
                          show:false,
                        },
                      }
                    }}
                />
            )}
      </div>
  );
}

export default Chart;