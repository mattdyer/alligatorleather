<?php
class CatalogRedirects_Catalog_Model_Observer
{
    public function __construct()
    {
    }
    
    public function redirect_for_single_product($observer)
    {
      $category = $observer->getData('category');  
      
      $_productCollection = $category->getProductCollection();

      if ($_productCollection->count() == 1) {
            
            foreach ($_productCollection as $_product){
                header("location:" . $_product->getProductUrl());
                exit;
             }

      }

      return $this;
    }
}