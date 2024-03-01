import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { Input } from '@progress/kendo-react-inputs';
import { filterBy } from '@progress/kendo-data-query';
import { useState } from 'react';

import './styles.css'

export const KendoGrid = (repos)  => {
  const [data, setData] = useState(repos.repos);
  
  const filterData = e => {
    let value = e.target.value;
    let filter = {
      logic: "or",
      filters: [{
        field: "name",
        operator: "contains",
        value: value,
      },
      {
        field: "description",
        operator: "contains",
        value: value,
      }
    ]
  }
  setData(filterBy(repos.repos, filter));
  }

  return (    
    <Grid className="grid"
    data = {data}
    >
    <GridToolbar>
      <Input className="grid__input" placeholder="Pesquise uma palavra chave" onChange={filterData} />
    </GridToolbar>
    <Column className="grid__collumn--name" field="name" title="Nome" width="100px"/>
    <Column className="grid__collumn--description" field="description" title="Descrição" width="300px"/>
    </Grid>
  )
}
