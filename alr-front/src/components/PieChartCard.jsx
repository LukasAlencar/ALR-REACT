import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip} from 'recharts';
                              
const PieChartCard = () =>{

    const data01 = [
        {
          "name": "Group A",
          "value": 400,
          "fill": "#83a6ed",
        },
        {
          "name": "Group B",
          "value": 300,
          "fill": "#8dd1e1",
        },
        {
          "name": "Group C",
          "value": 300,
          "fill": "#9164d8",

        },
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400,
          "fill": "#83a6ed",
        },
        {
          "name": "Group B",
          "value": 4567,
          "fill": "#8dd1e1",
        },
        {
          "name": "Group C",
          "value": 1398,
          "fill": "#9164d8",
        },
      ];
          
    return(
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

    )
}

export default PieChartCard