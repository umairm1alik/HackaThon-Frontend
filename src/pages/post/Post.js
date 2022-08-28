import React from 'react'
import Breadcrumb from '../../commonComponents/breadcrumb/Breadcrumb'
import Header from '../../commonComponents/header/Header'
import usePost from './usePost'

function Post() {
  const { addHouseHandler, handleChange, state } = usePost()
  return (
    <div>
      <Header />
      <Breadcrumb title="Post" />
      <div className='container mt-5'>
        <form className="form-horizontal">
          <fieldset>

            <div className='row'>
              <div className='col-lg-6'>
                <legend>Add House</legend>
                {/* <!-- Text input--> */}
                <div className="form-group mt-5">
                  <label className="control-label" for="product_id">Headline</label>
                  <div>
                    <input id="product_id" value={state.headline} onChange={handleChange} name="headline" placeholder="Headline" className="form-control input-md" required="" type="text" />

                  </div>
                </div>

                {/* <!-- Text input--> */}
                <div className="form-group mt-5">
                  <label className="control-label" for="product_name">Description</label>
                  <div>
                    <input id="product_name" name="description" value={state.description} onChange={handleChange} placeholder="Enter Description" className="form-control input-md" required="" type="text" />

                  </div>
                </div>


                {/* <!-- Textarea --> */}
                <div className="form-group mt-5">
                  <label className="control-label" for="product_description">Location</label>
                  <div>
                    <input id="product_name" name="location" value={state.location} onChange={handleChange} placeholder="Enter Location" className="form-control input-md" required="" type="text" />

                  </div>
                </div>
              </div>
            </div>

          </fieldset>
        </form>
        <button type="button" className="btn btn-success mt-5 d-block" onClick={addHouseHandler}>ADD House</button></div>

    </div>
  )
}

export default Post
