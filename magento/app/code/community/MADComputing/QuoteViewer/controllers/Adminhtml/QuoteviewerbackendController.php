<?php
class MADComputing_QuoteViewer_Adminhtml_QuoteviewerbackendController extends Mage_Adminhtml_Controller_Action
{
	public function indexAction()
    {
       $this->loadLayout();
	   $this->_title($this->__("View Unfinished Quotes"));
	   $this->renderLayout();
    }
}