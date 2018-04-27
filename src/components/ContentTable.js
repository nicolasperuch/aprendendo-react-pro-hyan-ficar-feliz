import React, { Component } from 'react';

export class ContentTable extends Component{

    render(){
        return(
            <table className="highlight centered responsive-table">
                <thead>
                    <tr>
                        <th>
                            City
                        </th>
                        <th>
                            Population
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.itens}
                </tbody>
            </table>
        );
    }
}