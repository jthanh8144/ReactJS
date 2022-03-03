
function NewInvoice() {
    return (
        <form>
            <label htmlFor="inp" style={{display: 'block'}}>Name</label>
            <input type='text' name='inp' id='inp' />
            <input type='submit' value='Create new Invoice' />
        </form>
    );
}

export default NewInvoice;
