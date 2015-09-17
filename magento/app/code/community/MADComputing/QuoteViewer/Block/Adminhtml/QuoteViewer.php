<?php
/**
 * News List admin grid container
 *
 * @author Magento
 */
class Madcomputing_Quoteviewer_Block_Adminhtml_Quoteviewer extends Mage_Adminhtml_Block_Widget_Grid_Container
{
    /**
     * Block constructor
     */
    public function __construct()
    {
        
        $this->_blockGroup = 'madcomputing_quoteviewer';
        $this->_controller = 'adminhtml_quoteviewer';
        //$this->_controller = 'report_shopcart_abandoned';
        
        $this->_headerText = Mage::helper('reports')->__('Quote Viewer');

        

        parent::__construct();

        
        $this->_removeButton('add');
        

    }

    protected function _prepareLayout()
    {
        $this->setChild('store_switcher',
            $this->getLayout()->createBlock('adminhtml/store_switcher')
                ->setUseConfirm(false)
                ->setSwitchUrl($this->getUrl('*/*/*', array('store'=>null)))
                ->setTemplate('report/store/switcher.phtml')
        );

        return parent::_prepareLayout();
    }

    public function getStoreSwitcherHtml()
    {
        if (Mage::app()->isSingleStoreMode()) {
            return '';
        }
        return $this->getChildHtml('store_switcher');
    }

    public function getGridHtml()
    {
        return $this->getStoreSwitcherHtml() . parent::getGridHtml();
    }
}