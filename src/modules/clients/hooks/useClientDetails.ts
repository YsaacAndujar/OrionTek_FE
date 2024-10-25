import Form from "antd/es/form";
import { LoadingContext } from "context/loading";
import { deleteClient, getClient, updateClient } from "helpers/clients";
import { IClient } from "interfaces/clients";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { showModal } from "utils/modal";

export const useClientDetails = (id: string) => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [client, setClient] = useState<IClient>()
    const { setLoading } = useContext(LoadingContext)

    useEffect(()=>{
        form.resetFields()
    },[client])
    const [isEdit, setIsEdit] = useState(false)
    useEffect(()=>{
        setLoading(true)
        getClient(id)
        .then((result)=>{
            setClient(result)
        })
        .catch(()=>{
            navigate('/clients')
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [id])
    
    const onCancelEdit = () =>{
        setIsEdit(false)
        form.resetFields()
    }

    const onSubmit = (values:IClient) =>{
        setLoading(true)
        updateClient(id, values)
        .then(()=>{
            showModal({title: 'Client edited', text:'Client edited successfully', type:'success'})
            setClient((prev) => ({...prev, ...values}))
        })
        .finally(()=>{
            setLoading(false)
        })
    }

    const onDeleteClick = () =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              onDeleteClient()
            }
          });
    }

    const onDeleteClient = () =>{
        setLoading(true)
        deleteClient(id)
        .then(()=>{
            showModal({title: 'Client deleted', text:'Client deleted successfully', type:'success'})
            navigate('/clients')
        })
        .finally(()=>{
            setLoading(false)
        })
    }

  return { client, isEdit, form, setIsEdit, onCancelEdit, onSubmit, onDeleteClick }
}
