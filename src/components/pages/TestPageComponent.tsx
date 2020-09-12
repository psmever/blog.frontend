import React, { useEffect } from 'react';
import Swal from 'sweetalert2'
import { useToasts } from 'react-toast-notifications'

export default function TestPage() {

    const { addToast } = useToasts()

    const alert = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                'Your imaginary file has been deleted.',
                'success'
              )
            // For more information about handling dismissals please visit
            // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })

    }

    const testToast = () => {
        addToast("test", {
            appearance: 'success',
            autoDismiss: true,
          })

        return (
            <>
            </>
        )
    }

    useEffect(() => {
        console.debug(':: TestPage Start :: ');

        // alert();

        //TODO react Toast
        // https://www.claritician.com/how-to-implement-toast-notifications-in-react-using-hooks
        testToast();

    }, []);

    return (
        <>
            TestPage
        </>

    );
}