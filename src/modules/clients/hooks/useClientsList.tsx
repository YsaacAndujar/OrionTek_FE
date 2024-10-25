import { TableProps } from "antd";
import { LoadingContext } from "context/loading";
import { getClients } from "helpers/clients";
import { IClient } from "interfaces/clients";
import { useContext, useEffect, useState } from "react";

export const useClientsList = () => {
    const [clients, setClients] = useState<IClient[]>([])
    const [pagination, setPagination] = useState<{total:number}>({total:0})
    const [filters, setFilters] = useState({page:1, entitiesPerPage:10,})
    const { setLoading } = useContext(LoadingContext)
  
    useEffect(()=>{
      setLoading(true)
        getClients(filters)
        .then((resp)=>{
            setClients(resp.data)
            setPagination((prev)=> ({...prev, total: resp.totalEntities}))
        })
        .finally(()=>{
          setLoading(false)
      })
    }, [filters])
    const onPaginationChange = (page: number, take: number) =>{
        setFilters((prev)=> ({...prev, page, entitiesPerPage:take}))
        setPagination((prev)=> ({...prev, current:page}))

    }
    const onSearch = (name:string) =>{
        setPagination((prev)=> ({...prev, current:1}))
        setFilters((prev)=> ({...prev, name, page:1}))
    }
    const columns: TableProps<IClient>['columns'] = [
        {
          title: 'Id',
          dataIndex: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Created At',
          render: (_, {createdAt}) =>(
            <>
                {new Date(createdAt).toLocaleDateString()}
            </>
          )
        },
        {
          title: 'Modified At',
          render: (_, {modifiedAt}) =>(
            <>
                {new Date(modifiedAt).toLocaleDateString()}
            </>
          )
        },
        {
          key: 'action',
          render: (_, record) => (
              <a href={`clients/${record.id}`}>Details</a>
          ),
        },
      ];

  return { clients, columns: columns.map((column, idx) => ({...column, key: idx})),pagination, onPaginationChange, onSearch }
}
