<?php  

class MADComputing_QuoteViewer_Block_Adminhtml_QuoteViewerbackend extends Mage_Adminhtml_Block_Template {

	protected $_quoteCollection = null;


	protected function _getCollection()
    {
        return  Mage::getResourceModel('reports/quote_collection');
    }

    public function getCollection()
    {
        if (is_null($this->_quoteCollection)) {
            $this->_quoteCollection = $this->_getCollection();
            $this->_quoteCollection->prepareForList($this->getCurrentPage());
        }

        return $this->_quoteCollection;
    }

}