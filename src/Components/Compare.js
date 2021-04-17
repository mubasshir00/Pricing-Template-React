import React from 'react'
import './Compare.css'
function Compare() {
    return (
        <div className="table-container">
            <h1>Compare plans</h1>
            <div className="table-responsive">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th style={{width:'34%'}}></th>
                            <th style={{width:'22%'}}>Free</th>
                            <th style={{ width:'22%'}}>Pro</th>
                            <th style={{ width:'22%'}}>Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-data">
                            <th>Public</th>
                            <td style={{ fontWeight: '300' }}>
                                <i class="fas fa-check"></i>
                            </td>
                            <td>
                                <i class="fas fa-check"></i>
                            </td>
                            <td>
                                <i class="fas fa-check"></i>
                            </td>
                        </tr>
                        <tr className="table-data colored" >
                            <th>Private</th>
                            <td></td>
                            <td>
                                <i class="fas fa-check"></i>
                            </td>
                            <td>
                                <i class="fas fa-check"></i>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="table-data">
                           <th>Permissions</th>
                           <td>
                                <i class="fas fa-check"></i>
                           </td>
                           <td>
                                <i class="fas fa-check"></i>
                           </td>
                           <td>
                                <i class="fas fa-check"></i>
                           </td>
                        </tr>
                        <tr className="table-data">
                           <th>Sharing</th>
                           <td></td>
                            <td>
                                <i class="fas fa-check"></i>
                            </td>
                            <td>
                                <i class="fas fa-check"></i>
                            </td>
                        </tr>
                        <tr className="table-data">
                           <th>Unlimited members</th>
                           <td></td>
                            <td>
                                <i class="fas fa-check"></i>
                            </td>
                            <td>
                                <i class="fas fa-check"></i>
                            </td>
                        </tr>
                        <tr className="table-data">
                           <th>Extra security</th>
                           <td></td>
                           <td></td>
                           <td>
                                <i class="fas fa-check"></i>
                           </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Compare
