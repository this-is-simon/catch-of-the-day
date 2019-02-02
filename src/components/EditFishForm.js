import React from 'react';

class EditFishForm extends React.Component {
  render () {
    return <div className='fish-edit'>
      <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
      <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
      <select name="status" ref={this.statusRef}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" ref={this.descRef} type="text" placeholder="Desc"></textarea>
      <input name="img" ref={this.imgRef} type="text" placeholder="Img" />
    </div>
  }
}

export default EditFishForm;
