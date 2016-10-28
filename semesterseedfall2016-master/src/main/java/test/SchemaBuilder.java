/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import java.util.HashMap;
import javax.persistence.Persistence;

/**
 *
 * @author LouiseB
 */
public class SchemaBuilder
{
        public static void main(String[] args)
    {
        HashMap<String, Object> puproperties = new HashMap();
                
        Persistence.generateSchema("seed", puproperties);        
        Persistence.generateSchema("seed", null);
    }
}
